import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';
import { Faculty } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty.model';
import { Student } from 'src/@generated/prisma-nestjs-graphql/student/student.model';
import { AuthService } from './auth.service';
import { JWTPayload } from './jwt.payload.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private auth: AuthService, private config: ConfigService) {
    super({
      secretOrKey: config.get('JWT_KEY'),
      jwtFromRequest: ExtractJwt.fromHeader('x-auth-token'),
    });
  }

  async validate(payload: JWTPayload): Promise<Admin | Student | Faculty> {
    const timeCheck = new Date() < new Date(payload.iss);
    if (!timeCheck) {
      throw new UnauthorizedException('Token expired');
    }
    let user: Admin | Student | Faculty;
    switch (payload.azp) {
      case this.config.get('ADMIN_CLIENT_ID'):
        user = await this.auth.getAdmin(payload.sub);
        break;
      case this.config.get('STUDENT_CLIENT_ID'):
        user = await this.auth.getStudent(payload.sub);
        break;
      case this.config.get('FACULTY_CLIENT_ID'):
        user = await this.auth.getFaculty(payload.sub);
        break;
      default:
        throw new UnauthorizedException('Bad Token');
    }

    if (!user) {
      throw new UnauthorizedException('Invalid Token');
    }

    return user;
  }
}

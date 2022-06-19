import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  generatePasswordHash(password: string): string {
    return hashSync(password, 10);
  }

  getStudent(id: number) {
    return this.prisma.student.findUnique({
      where: { id },
    });
  }
  getAdmin(id: number) {
    return this.prisma.admin.findUnique({
      where: { id },
    });
  }
  getFaculty(id: number) {
    return this.prisma.faculty.findUnique({
      where: { id },
    });
  }
}

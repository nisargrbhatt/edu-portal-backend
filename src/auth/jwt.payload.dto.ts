export interface JWTPayload {
  sub: number;
  iss: string;
  azp: string;
  permissions?: string[];
}

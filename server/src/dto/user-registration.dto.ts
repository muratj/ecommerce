export class UserRegistrationDto {
  email: string;
  password: string;
  role?: string;

  constructor(reqBody: any) {
    this.email = reqBody.email;
    this.password = reqBody.password;
    this.role = reqBody.role;
  }
}

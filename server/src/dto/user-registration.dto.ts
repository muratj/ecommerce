export class UserRegistrationDto {
  email: string;
  password: string;
  role?: string;

  constructor(reqBody: any) {
    this.email = reqBody.email;
    this.password = reqBody.password;
    this.role = reqBody.role;
  }

  validate = () => {
    const result = {
      isValid: true,
      message: 'Pass',
    };
    const emailFilter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!emailFilter.test(this.email)) {
      result.isValid = false;
      result.message = 'Please provide valid email';
    }
    return result;
  };

  // TODO: Create utility method for payload validation
}

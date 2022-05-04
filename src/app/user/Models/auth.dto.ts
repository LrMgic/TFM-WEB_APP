export class AuthDTO {
  user_id: string;
  access_token: string;
  email: string;
  password: string;
  userrol: string;
  alias: string;

  constructor(
    user_id: string,
    access_token: string,
    email: string,
    password: string,
    userrol: string,
    alias: string
  ) {
    this.user_id = user_id;
    this.access_token = access_token;
    this.email = email;
    this.password = password;
    this.userrol = userrol;
    this.alias = alias;
  }
}

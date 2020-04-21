export class AuthConfig {
  clientId: string;
  url: string;
  redirectUrl: string;
  clientSecret: string;

  constructor(initializer?: Partial<AuthConfig>) {
    Object.assign(this, initializer);
  }
}

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { AuthConfig } from '../app/models/auth-config';

export const environment = {
  production: false,
  authConfig: new AuthConfig({
    clientId: '38785',
    clientSecret: '6128d552548b683ddf926f01ced93dcd12dc3ac5',
    redirectUrl: 'http://localhost:4200/token'
  })
};

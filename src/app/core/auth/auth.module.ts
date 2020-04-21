import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { AuthConfig } from '../../models/auth-config';

export const FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<any>('authConfig');

@NgModule({
})
export class AuthModule {
  static forRoot(authConfig: AuthConfig): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [{provide: FOR_ROOT_OPTIONS_TOKEN, useValue: authConfig}]
    };
  }

}

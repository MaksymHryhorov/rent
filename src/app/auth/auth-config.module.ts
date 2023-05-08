import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-surpmzfuxh8qhde8.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: 'IhTlrxbJIN0oF4sF10NynntjGOXELclO',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { WbNavigationExtras, WorkbenchRouter } from '@scion/workbench';
import { flatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  private _tokenInfo: StravaTokenInfo;
  private _STRAVA_SCOPE = 'read_all,activity:read_all';

  constructor(private http: HttpClient,
              private workbenchRouter: WorkbenchRouter) {
  }

  get accessToken() {
    return this._tokenInfo.access_token;
  }

  login() {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${environment.authConfig.clientId}&response_type=code&redirect_uri=${environment.authConfig.redirectUrl}&approval_prompt=force&scope=${this._STRAVA_SCOPE}`;
  }

  getTokenFromLocalStorage(): boolean {
    const tokenInfo = JSON.parse(localStorage.getItem('strava'));
    if (tokenInfo) {
      this._tokenInfo = tokenInfo;
      return true;
    } else {
      return false;
    }
  }

  getTokenFromApi(code: string) {
    this.http.post(`https://www.strava.com/oauth/token?client_id=${environment.authConfig.clientId}&client_secret=${environment.authConfig.clientSecret}&code=${code}&grant_type=authorization_code`, {})
      .subscribe((tokenInfo: StravaTokenInfo) => {
        this._tokenInfo = tokenInfo;
        localStorage.setItem('strava', JSON.stringify(tokenInfo));
        const extras: WbNavigationExtras = {
          target: 'blank'
        };
        this.workbenchRouter.navigate(['/activities'], extras);
      });
  }

  refreshTokenFromApi(): Observable<StravaTokenInfo> {
    return this.http.post(`https://www.strava.com/oauth/token?client_id=${environment.authConfig.clientId}&client_secret=${environment.authConfig.clientSecret}&grant_type=authorization_code&refresh_token=${this._tokenInfo.refresh_token}`, {})
      .pipe(flatMap((tokenInfo: StravaTokenInfo) => {
        this._tokenInfo = tokenInfo;
        return of(tokenInfo);
      }));
  }
}

class StravaTokenInfo {
  // tslint:disable:variable-name
  access_token: string;
  athlete: any;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

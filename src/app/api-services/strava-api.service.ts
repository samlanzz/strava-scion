import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class StravaApiService {
  private baseUrl = 'https://www.strava.com/api/v3/';

  constructor(private http: HttpClient) {
  }

  getMyInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}athletes/23576093`, {
      headers: {
        Authorization: `Bearer ${environment.stravaApiAccessToken}`
      }
    });
  }

  getAllActivities(): Observable<any> {
    return this.http.get(`${this.baseUrl}athlete/activities`, {
      headers: {
        Authorization: `Bearer ${environment.stravaApiAccessToken}`
      }
    });
  }

  getActivityById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/activities/${id}`, {
      headers: {
        Authorization: `Bearer ${environment.stravaApiAccessToken}`
      }
    });
  }
}

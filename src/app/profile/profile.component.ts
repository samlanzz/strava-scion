import { Component, OnInit } from '@angular/core';
import { StravaApiService } from '../api-services/strava-api.service';
import { Athlete } from '../models/athlete';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isLoading = false;
  athlete: Athlete;

  constructor(private stravaApiService: StravaApiService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.stravaApiService.getMyInfo().subscribe(info => {
      this.athlete = info;
      this.isLoading = false;
    });
  }

  logout(): void {
    this.authService.logout();
  }

}

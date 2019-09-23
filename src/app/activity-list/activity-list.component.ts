import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StravaApiService } from '../api-services/strava-api.service';
import { StravaActivity } from '../models/strava-activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityListComponent implements OnInit {

  activities: StravaActivity[] = [];
  isLoading = false;

  constructor(private stravaApiService: StravaApiService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.stravaApiService.getActivities()
      .subscribe(activities => {
        this.activities = activities;
        this.isLoading = false;
      });
  }

}

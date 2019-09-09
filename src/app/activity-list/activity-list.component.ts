import { Component, OnInit } from '@angular/core';
import { StravaApiService } from '../api-services/strava-api.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activities: any[] = [];

  constructor(private stravaApiService: StravaApiService) {
  }

  ngOnInit() {
    this.stravaApiService.getAllActivities()
      .subscribe(activities => {
        this.activities = activities;
      });
  }

}

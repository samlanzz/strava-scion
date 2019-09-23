import { Component, OnInit } from '@angular/core';
import { StravaApiService } from '../api-services/strava-api.service';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ActivatedRoute } from '@angular/router';
import { WorkbenchView } from '@scion/workbench';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent implements OnInit {
  activities: any[] = [];
  descSortOrder = ClrDatagridSortOrder.DESC;
  isLoading = false;

  constructor(private stravaApiService: StravaApiService,
              private route: ActivatedRoute,
              private view: WorkbenchView) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe(() => this.view.title = 'Statistics');
    this.stravaApiService.getActivities(100)
      .subscribe(activities => {
        this.activities = activities;
        this.isLoading = false;
      });
  }

  metersPerSecondToKilometersPerHour(metersPerSecond: number): number {
    return Math.round(metersPerSecond * 3.6 * 100) / 100;
  }

  secondsToTime(seconds: number): string {
    return `${Math.floor(seconds / 3600)}:${Math.floor(seconds / 60 % 60)}:${Math.floor(seconds % 60)}`;
  }

  metersToKilometers(meters: number): number {
    return Math.round(meters / 10) / 100;
  }
}

import { Component, OnInit } from '@angular/core';
import { StravaApiService } from '../api-services/strava-api.service';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ActivatedRoute } from '@angular/router';
import { WorkbenchView } from '@scion/workbench';
import { StravaActivity } from '../models/strava-activity';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  providers: [DatePipe]
})
export class StatisticsComponent implements OnInit {
  activities: any[] = [];
  descSortOrder = ClrDatagridSortOrder.DESC;
  isLoading = false;
  isInspectionModalOpen = false;

  selectedActivities: StravaActivity[] = [];
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];

  constructor(private stravaApiService: StravaApiService,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private view: WorkbenchView) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.view.closable = false;
    this.route.paramMap.subscribe(() => this.view.title = 'Home');
    this.stravaApiService.getActivities(150)
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

  getSelectedLink(): string {
    if (this.selectedActivities.length === 1) {
      return `/activity/${this.selectedActivities[0].id}`;
    } else {
      return '';
    }
  }

  onAnalyseAvgWatts(): void {
    const data = this.selectedActivities
      .filter(value => value.has_heartrate)
      .sort((a, b) => new Date(a.start_date) > new Date(b.start_date) ? 1 : -1);
    this.lineChartData = [
      {
        data: data.map(a => a.average_watts),
        label: 'Average watt output per training'
      }
    ];
    this.lineChartLabels = data.map(a => [this.datePipe.transform(a.start_date), a.name]);
    this.isInspectionModalOpen = true;
  }

  onAnalyseElapsedTime(): void {
    const data = this.selectedActivities
      .filter(value => value.has_heartrate)
      .sort((a, b) => new Date(a.start_date) > new Date(b.start_date) ? 1 : -1);
    this.lineChartData = [
      {
        data: data.map(a => a.elapsed_time),
        label: 'Elapsed time per training'
      }
    ];
    this.lineChartLabels = data.map(a => [this.secondsToTime(a.elapsed_time), a.name]);
    this.isInspectionModalOpen = true;
  }

  onAnalyseAverageHeartrate(): void {
    const data = this.selectedActivities
      .filter(value => value.has_heartrate)
      .sort((a, b) => new Date(a.start_date) > new Date(b.start_date) ? 1 : -1);
    this.lineChartData = [
      {
        data: data.map(a => a.average_heartrate),
        label: 'Average heartrate per training'
      }
    ];
    this.lineChartLabels = data.map(a => [a.average_heartrate.toString(), a.name]);
    this.isInspectionModalOpen = true;
  }
}

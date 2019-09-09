import { Component, OnInit } from '@angular/core';
import { WorkbenchView } from '@scion/workbench';
import { StravaApiService } from '../api-services/strava-api.service';
import { concatMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activity: any;

  constructor(private route: ActivatedRoute,
              private stravaApiService: StravaApiService,
              private view: WorkbenchView) {
  }

  ngOnInit() {
    this.route.params.pipe(concatMap(params => {
      return this.stravaApiService.getActivityById(params.id);
    })).subscribe(activity => {
      this.activity = activity;
      this.view.title = activity.name;
      this.view.heading = new Date(activity.start_date).toLocaleDateString();
    });
  }

}

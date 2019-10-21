import { Component, OnInit } from '@angular/core';
import { WorkbenchView } from '@scion/workbench';
import { StravaApiService } from '../api-services/strava-api.service';
import { concatMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { StravaActivity } from '../models/strava-activity';

class DetailData {
  title: string;
  value: any;

  constructor(title: string, value: any) {
    this.title = title;
    this.value = value;
  }
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activity: StravaActivity;
  detailData: DetailData[] = [];

  constructor(private route: ActivatedRoute,
              private stravaApiService: StravaApiService,
              private view: WorkbenchView) {
  }

  ngOnInit() {
    this.route.params.pipe(concatMap(params => {
      return this.stravaApiService.getActivityById(params.id);
    })).subscribe(activity => {
      this.activity = activity;
      console.log(activity);
      this.view.title = activity.name;
      this.view.heading = new Date(activity.start_date).toLocaleDateString();
      this._setDetailData();
    });
  }

  private _setDetailData() {
    Object.keys(this.activity).forEach(key => {
      if (this.activity[key] instanceof Array) {
        this.detailData.push(new DetailData(key, this.activity[key].length));
      } else if (!(this.activity[key] instanceof Object)) {
        this.detailData.push(new DetailData(key, this.activity[key]));
      }
    });
  }

}

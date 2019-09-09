import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity/activity.component';
import { StravaApiService } from './api-services/strava-api.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: 'activities', component: ActivityListComponent},
  {path: 'activity/:id', component: ActivityComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule
  ],
  providers: [StravaApiService],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

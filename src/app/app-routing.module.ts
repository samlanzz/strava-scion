import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity/activity.component';
import { StravaApiService } from './api-services/strava-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenResolveComponent } from './core/auth/token-resolve/token-resolve.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: 'activities', component: ActivityListComponent},
  {path: 'activity/:id', component: ActivityComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'token', component: TokenResolveComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [StravaApiService],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

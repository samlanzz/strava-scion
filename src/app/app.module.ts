import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { WorkbenchModule } from '@scion/workbench';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity/activity.component';
import { AuthService } from './core/auth/auth.service';
import { TokenResolveComponent } from './core/auth/token-resolve/token-resolve.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StravaHttpInterceptor } from './api-services/strava-http.interceptor';
import { ClarityModule } from '@clr/angular';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { StatisticCompareLineChartComponent } from './statistics/statistic-compare-line-chart/statistic-compare-line-chart.component';
import { StatisticsModule } from './statistics/statistics.module';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityComponent,
    ProfileComponent,
    TokenResolveComponent
  ],
  imports: [
    WorkbenchModule.forRoot(),
    RouterModule, // module required by SCION Workbench
    BrowserAnimationsModule, // module required by SCION Workbench
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    StatisticsModule
  ],
  exports: [StatisticCompareLineChartComponent],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StravaHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

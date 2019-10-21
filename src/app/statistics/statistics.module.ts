import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics.component';
import { StatisticCompareLineChartComponent } from './statistic-compare-line-chart/statistic-compare-line-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { WorkbenchModule } from '@scion/workbench';

@NgModule({
  imports: [
    WorkbenchModule,
    BrowserAnimationsModule, // module required by SCION Workbench
    ClarityModule,
    FormsModule,
    ChartsModule,
  ],
  declarations: [
    StatisticsComponent,
    StatisticCompareLineChartComponent
  ],
  exports: [
    StatisticsComponent,
    StatisticCompareLineChartComponent
  ]
})
export class StatisticsModule {
}

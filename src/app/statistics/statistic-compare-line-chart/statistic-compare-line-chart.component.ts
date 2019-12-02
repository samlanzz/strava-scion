import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistic-compare-line-chart',
  templateUrl: './statistic-compare-line-chart.component.html'
})
export class StatisticCompareLineChartComponent {
  @Input()
  lineChartData: ChartDataSets[];

  @Input()
  lineChartLabels: Label[];

  chartOptions = {
    responsive: true,
  };
}

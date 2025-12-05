import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface ChartData {
  name: string;
  values: { group: string; value: number }[];
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  data = input.required<ChartData[]>();
  
  maxVal = 900;

  getBarHeight(value: number): string {
    return `${(value / this.maxVal) * 100}%`;
  }
}

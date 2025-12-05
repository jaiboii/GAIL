import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BarChartComponent } from './bar-chart/bar-chart.component';

interface SummaryCard {
  location: string;
  gasConsumption: number;
  billCollection: number;
  openComplaints: number;
  cardBg: string;
  iconBg: string;
  titleColor: string;
}

interface ChartData {
  name: string;
  values: { group: string; value: number }[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [BarChartComponent],
})
export class DashboardComponent {
  summaryCards = signal<SummaryCard[]>([
    { location: 'Meerut', gasConsumption: 50000, billCollection: 40800, openComplaints: 500, cardBg: 'bg-rose-100', iconBg: 'bg-rose-200', titleColor: 'text-rose-600' },
    { location: 'Sonipat', gasConsumption: 50000, billCollection: 40800, openComplaints: 500, cardBg: 'bg-sky-100', iconBg: 'bg-sky-200', titleColor: 'text-sky-600' },
    { location: 'Dewas', gasConsumption: 50000, billCollection: 40800, openComplaints: 500, cardBg: 'bg-orange-100', iconBg: 'bg-orange-200', titleColor: 'text-orange-600' },
    { location: 'Taj Trapezium', gasConsumption: 50000, billCollection: 40800, openComplaints: 500, cardBg: 'bg-violet-100', iconBg: 'bg-violet-200', titleColor: 'text-violet-600' },
    { location: 'Bengaluru', gasConsumption: 50000, billCollection: 40800, openComplaints: 500, cardBg: 'bg-teal-100', iconBg: 'bg-teal-200', titleColor: 'text-teal-600' },
  ]);

  chartData = signal<ChartData[]>([
    { name: 'Meerut', values: [{ group: 'Customer Registration', value: 100 }, { group: 'BP Number Generated', value: 80 }, { group: 'Gsin', value: 50 }] },
    { name: 'Sonipat', values: [{ group: 'Customer Registration', value: 450 }, { group: 'BP Number Generated', value: 250 }, { group: 'Gsin', value: 150 }] },
    { name: 'Taj Trapezium', values: [{ group: 'Customer Registration', value: 250 }, { group: 'BP Number Generated', value: 150 }, { group: 'Gsin', value: 100 }] },
    { name: 'Bengaluru', values: [{ group: 'Customer Registration', value: 800 }, { group: 'BP Number Generated', value: 550 }, { group: 'Gsin', value: 650 }] },
    { name: 'Dewas', values: [{ group: 'Customer Registration', value: 450 }, { group: 'BP Number Generated', value: 250 }, { group: 'Gsin', value: 100 }] },
  ]);
}

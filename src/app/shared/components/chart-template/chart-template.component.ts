import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-template',
  templateUrl: './chart-template.component.html',
  styleUrls: ['./chart-template.component.scss'],
})
export class ChartTemplateComponent implements AfterViewInit {
  @Input() chartId!: string;
  @Input() chartName: string = 'Users overview';
  @Input() isTemplate: boolean = false;
  @Input() bgChart: string = '';

  @Input() chartConfig: object = {};
  @Input() chartStyle: object = {
    display: 'block',
    boxSizing: 'border-box',
    minHeight: '250px',
    maxHeight: '300px',
    width: '100%',
  };

  ctx!: HTMLCanvasElement | CanvasRenderingContext2D;
  config: any;

  chartDatalabels: any[] = [];
  ngAfterViewInit() {
    this.ctx = document.getElementById(this.chartId) as HTMLCanvasElement;
    console.log(this.ctx);
    this.ctx = this.ctx.getContext('2d') as CanvasRenderingContext2D;
    this.config = this.chartConfig;
    new Chart(this.ctx, this.config);
  }
}

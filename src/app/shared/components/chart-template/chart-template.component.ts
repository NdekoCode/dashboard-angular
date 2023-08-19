import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-template',
  templateUrl: './chart-template.component.html',
})
export class ChartTemplateComponent implements AfterViewInit {
  @Input() chartId!: string;
  @Input() chartName: string = 'Users overview';
  @Input() isTemplate: boolean = false;
  @Input() bgChart: string = '';
  chartInstance!: Chart;
  @Input() chartConfig: object = {};
  @Input() chartStyle: object = {
    display: 'block',
    boxSizing: 'border-box',
    minHeight: '200px',
    height: 'max-content',
    maxHeight: '250px',
    width: '100%',
  };

  ctx!: HTMLCanvasElement | CanvasRenderingContext2D;
  config: any;

  chartDatalabels: any[] = [];
  ngAfterViewInit() {
    this.ctx = document.getElementById(this.chartId) as HTMLCanvasElement;
    this.ctx = this.ctx.getContext('2d') as CanvasRenderingContext2D;
    this.config = this.chartConfig;

    if (this.chartInstance === undefined) {
      this.chartInstance = new Chart(this.ctx, this.config);
    }
  }
}

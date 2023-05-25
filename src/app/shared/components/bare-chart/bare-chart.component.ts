import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bare-chart',
  templateUrl: './bare-chart.component.html',
})
export class BareChartComponent {
  ctx!: HTMLCanvasElement | CanvasRenderingContext2D;
  config: any;
  chartDatalabels: any[] = [];
  ngOnInit() {
    this.ctx = document.getElementById('bar-chart') as HTMLCanvasElement;
    this.ctx = this.ctx.getContext('2d') as CanvasRenderingContext2D;
    this.config = {
      type: 'bar',
      data: {
        labels: ['1900', '1950', '1999', '2050'],
        datasets: [
          {
            label: 'Europe',
            type: 'line',
            borderColor: '#8e5ea2',
            data: [408, 547, 675, 734],
            fill: false,
          },
          {
            label: 'Africa',
            type: 'line',
            borderColor: '#3e95cd',
            data: [133, 221, 783, 2478],
            fill: false,
          },
          {
            label: 'Europe',
            type: 'bar',
            backgroundColor: 'rgba(0,0,0,0.2)',
            data: [408, 547, 675, 734],
          },
          {
            label: 'Africa',
            type: 'bar',
            backgroundColor: 'rgba(0,0,0,0.2)',
            backgroundColorHover: '#3e95cd',
            data: [133, 221, 783, 2478],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Population growth (millions): Europe & Africa',
        },
        legend: { display: false },
      },
    };
    new Chart(this.ctx, this.config);
  }
}

import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-rounded-bar-chart',
  templateUrl: './rounded-bar-chart.component.html',
  styleUrls: ['./rounded-bar-chart.component.scss'],
})
export class RoundedBarChartComponent {
  ctx!: HTMLCanvasElement | CanvasRenderingContext2D;
  config: any;
  chartData: number[] = [];
  chartDatalabels: any[] = [];
  ngOnInit() {
    this.ctx = document.getElementById(
      'line-rounded-chart'
    ) as HTMLCanvasElement;
    this.ctx = this.ctx.getContext('2d') as CanvasRenderingContext2D;

    const gradientStroke1 = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

    const gradientStroke2 = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

    // end chart 2

    this.config = {
      type: 'bar',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Sales',
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: '#fff',
            data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 600,
              beginAtZero: true,
              padding: 15,
              font: {
                size: 14,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2,
              },
              color: '#fff',
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    };
    const myChart = new Chart(this.ctx, this.config);
  }
}

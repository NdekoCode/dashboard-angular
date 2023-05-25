import { Component } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent {
  ctx!: HTMLCanvasElement | CanvasRenderingContext2D;
  config: any;
  chartData: number[] = [];
  chartDatalabels: any[] = [];
  ngOnInit() {
    this.chartData.push(1);
    this.chartData.push(2);
    this.chartData.push(3);

    this.chartDatalabels.push('A');
    this.chartDatalabels.push('B');
    this.chartDatalabels.push('C');
    this.ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.ctx = this.ctx.getContext('2d') as CanvasRenderingContext2D;
    /* this.config = {
      type: 'pie',
      options: {},
      data: {
        labels: this.chartDatalabels,
        datasets: [
          {
            label: 'Chart Data',
            data: this.chartData,
            borderWidth: 5,
            borderColor: 'grey',
            backgroundColor: ['pink', 'yellow', 'red'],
          },
        ],
      },
    }; */
    /* this.config = {
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
    }; */
    // chart 2

    const gradientStroke1 = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

    const gradientStroke2 = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

    new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Mobile apps',
            tension: 0.4,
            // borderWidth: 0,
            pointRadius: 0,
            borderColor: '#cb0c9f',
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            // maxBarThickness: 6,
          },
          {
            label: 'Websites',
            tension: 0.4,
            // borderWidth: 0,
            pointRadius: 0,
            borderColor: '#3A416F',
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            // maxBarThickness: 6,
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
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf',
              font: {
                size: 11,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 20,
              font: {
                size: 11,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2,
              },
            },
          },
        },
      },
    });

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

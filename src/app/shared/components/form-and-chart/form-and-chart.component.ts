import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Chart } from 'chart.js';
@Component({
  selector: 'app-form-and-chart',
  templateUrl: './form-and-chart.component.html',
  styleUrls: ['./form-and-chart.component.scss'],
})
export class FormAndChartComponent {
  pieChartForm!: FormGroup;

  ctx: any;
  config: any;
  chartData: number[] = [];
  chartDatalabels: any[] = [];

  firstTimeUpdate = true;

  myChart: any;

  ngOnInit() {
    this.pieChartForm = new FormGroup({
      colName: new FormControl(this.chartDatalabels),
      colValue: new FormControl(this.chartData),
    });
  }
  createChart() {
    this.prepareChartOnlyIfFirstTimeDataIsEntered();

    this.pushFormDataIntoChart();

    this.firstTimeUpdate = false;

    this.myChart.update();
  }
  private pushFormDataIntoChart() {
    this.chartData.push(this.pieChartForm.value.colValue);
    this.chartDatalabels.push(this.pieChartForm.value.colName);
  }

  private prepareChartOnlyIfFirstTimeDataIsEntered() {
    if (this.firstTimeUpdate) {
      this.prepareChart();
    }
  }
  private prepareChart() {
    this.ctx = document.getElementById('myChart');
    this.config = {
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
            backgroundColor: ['pink', 'yellow', 'red', 'grey', 'blue'],
          },
        ],
      },
    };
    this.myChart = new Chart(this.ctx, this.config);
  }
}

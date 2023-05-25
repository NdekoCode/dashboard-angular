import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesViewComponent } from './pages/services-view/services-view.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { AppLoadingComponent } from './shared/components/app-loading/app-loading.component';
import { BareChartComponent } from './shared/components/bare-chart/bare-chart.component';
import { ChartsComponent } from './shared/components/charts/charts.component';
import { DashboardNavbarComponent } from './shared/components/dashboard-navbar/dashboard-navbar.component';
import { DoughnutChartComponent } from './shared/components/doughnut-chart/doughnut-chart.component';
import { GlobalAvgDataComponent } from './shared/components/global-avg-data/global-avg-data.component';
import { RoundedBarChartComponent } from './shared/components/rounded-bar-chart/rounded-bar-chart.component';
import { ShowDateDayComponent } from './shared/components/show-date-day/show-date-day.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { StatisticDetailsComponent } from './shared/components/statistic-details/statistic-details.component';
import { UserTableItemComponent } from './shared/components/user-table-item/user-table-item.component';
import { UserTableListComponent } from './shared/components/user-table-list/user-table-list.component';
import { ChartTemplateComponent } from './shared/components/chart-template/chart-template.component';
Chart.register(...registerables);
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserTableListComponent,
    UserTableItemComponent,
    UserViewComponent,
    ServicesViewComponent,
    DashboardNavbarComponent,
    AppLoadingComponent,
    ShowDateDayComponent,
    GlobalAvgDataComponent,
    ChartsComponent,
    DoughnutChartComponent,
    BareChartComponent,
    StatisticDetailsComponent,
    RoundedBarChartComponent,
    ChartTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

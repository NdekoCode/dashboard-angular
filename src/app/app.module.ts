import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { UserTableListComponent } from './shared/components/user-table-list/user-table-list.component';
import { UserTableItemComponent } from './shared/components/user-table-item/user-table-item.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { ServicesViewComponent } from './pages/services-view/services-view.component';
import { DashboardNavbarComponent } from './shared/components/dashboard-navbar/dashboard-navbar.component';
import { AppLoadingComponent } from './shared/components/app-loading/app-loading.component';
import { ShowDateDayComponent } from './shared/components/show-date-day/show-date-day.component';
import { GlobalAvgDataComponent } from './shared/components/global-avg-data/global-avg-data.component';

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
    GlobalAvgDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { userTest } from './../../../libs/constants/types';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
})
export class DoughnutChartComponent implements OnInit {
  config!: ChartConfiguration | any;
  users: userTest[] = [];
  users2FA: number = 0;
  userSuspended: number = 0;
  usersVerified: number = 0;
  usersUnverified: number = 0;
  isLoading: boolean = true;
  constructor(private _userService: UsersService) {}
  ngOnInit() {
    this._userService.getUserList().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
        this.getUsersFiltered();
      },
    });
  }
  getUsersFiltered() {
    this.usersVerified = this.users?.filter((user) => user.verified).length;
    this.usersUnverified = this.users?.filter((user) => !user.verified).length;
    this.users2FA = this.users?.filter((user) => user.isTfaEnabled).length;
    this.userSuspended = this.users?.filter(
      (user) => user.userStatus === 'suspended'
    ).length;
    this.config = {
      type: 'doughnut',
      data: {
        labels: [
          'users verified',
          'user unverify',
          'user suspended',
          '2FA Auth',
        ],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#009719', '#ee3c91', '', '#3e95cd'],
            data: [
              this.usersVerified,
              this.usersUnverified,
              this.userSuspended,
              this.users2FA,
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Predicted users interaction in Zabibu CRM',
        },
      },
    };
  }
}

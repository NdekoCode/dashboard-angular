import { Component } from '@angular/core';
import { userTest } from './../../../libs/constants/types';
import { ApiConfigService } from './../../../services/api-config.service';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-global-avg-data',
  templateUrl: './global-avg-data.component.html',
  styleUrls: ['./global-avg-data.component.scss'],
})
export class GlobalAvgDataComponent {
  users!: userTest[];
  usersOnline: userTest[] = [];
  userSuspended: userTest[] = [];
  userUnverify: userTest[] = [];
  isLoading: boolean = true;

  constructor(
    private _userService: UsersService,
    private _apiConfig: ApiConfigService
  ) {}
  ngOnInit(): void {
    this._userService.getUserList().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
        this.userUnverify = this.users.filter((user) => !user.verified);
        this.usersOnline = this.users.filter(
          (user) => user.userStatus === 'online'
        );
        this.userSuspended = this.users.filter(
          (user) => user.userStatus === 'suspended'
        );
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
        this._apiConfig.handleError(err);
      },
    });
  }
}

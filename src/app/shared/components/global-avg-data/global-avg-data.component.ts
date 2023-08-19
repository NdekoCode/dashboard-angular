import { Component, Input } from '@angular/core';
import { userTest } from './../../../libs/constants/types';
import { ApiConfigService } from './../../../services/api-config.service';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-global-avg-data',
  templateUrl: './global-avg-data.component.html',
  styleUrls: ['./global-avg-data.component.scss'],
})
export class GlobalAvgDataComponent {
  @Input() users!: userTest[];
  users2FA: userTest[] = [];
  userSuspended: userTest[] = [];
  usersVerified: userTest[] = [];
  usersUnverified: userTest[] = [];
  isLoading: boolean = true;

  constructor(
    private _userService: UsersService,
    private _apiConfig: ApiConfigService
  ) {}
  ngOnInit(): void {
    this.isLoading = false;
    this.usersUnverified = this.users.filter((user) => !user.verified);
    this.usersVerified = this.users.filter((user) => user.verified);
    this.users2FA = this.users.filter((user) => user.isTfaEnabled);
    this.userSuspended = this.users.filter(
      (user) => user.userStatus === 'suspended'
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { userTest } from './../../libs/constants/types';
import { ApiConfigService } from './../../services/api-config.service';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
})
export class UserViewComponent implements OnInit {
  users!: userTest[];
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
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
        this._apiConfig.handleError(err);
      },
    });
  }
}

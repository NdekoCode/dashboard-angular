import { Component, OnInit } from '@angular/core';
import { userTest } from './../../libs/constants/types';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
})
export class UserViewComponent implements OnInit {
  users!: userTest[];
  isLoading: boolean = true;

  constructor(private _userService: UsersService) {}
  ngOnInit(): void {
    this.users = this._userService.getAllUsers();
    this.isLoading = false;
  }
}

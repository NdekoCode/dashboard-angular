import { Component, OnInit } from '@angular/core';
import { userTest } from './../../../libs/constants/types';
import { ApiConfigService } from './../../../services/api-config.service';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-user-table-list',
  templateUrl: './user-table-list.component.html',
  styleUrls: ['./user-table-list.component.scss'],
})
export class UserTableListComponent implements OnInit {
  users!: userTest[];
  filteredUser!: userTest[];
  isLoading: boolean = true;
  userSearch: string = '';
  constructor(
    private _userService: UsersService,
    private _apiConfig: ApiConfigService
  ) {}

  ngOnInit(): void {
    this._userService.getUserList().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUser = this.users;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
        this._apiConfig.handleError(err);
      },
    });
    this.getFilteredUser(this.userSearch);
  }
  getFilteredUser(value: string = '') {
    if (!value) {
      this.filteredUser = this.users;
    } else {
      this.filteredUser = this.users.filter(
        (user) =>
          user.firstName.includes(value) ||
          user.lastName.includes(value) ||
          user.email.includes(value) ||
          user?.middleName?.includes(value) ||
          user?.company?.name.includes(value) ||
          user?.company?.title.includes(value) ||
          user?.company?.department.includes(value)
      );
    }
  }
  searchUser(searchValue: string) {
    this.userSearch = searchValue;
    this.getFilteredUser(this.userSearch);
  }
}

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
  maxData = 100;
  maxPagination: number = 0;
  page = 1;
  limit = 20;
  constructor(
    private _userService: UsersService,
    private _apiConfig: ApiConfigService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getFilteredUser(this.userSearch);
  }
  getData() {
    this._userService.getUsers(this.page, this.limit).subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUser = this.users;
        this.isLoading = false;
        this.maxPagination = this.maxData / this.users.length;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
        this._apiConfig.handleError(err);
      },
    });
  }
  getFilteredUser(value: string = '') {
    if (!value) {
      this.filteredUser = this.users;
    } else {
      this.filteredUser = this.filteredUser.filter(
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
  nextPage() {
    console.log(this.page <= this.maxPagination, this.page, this.maxPagination);
    if (this.page < this.maxPagination) {
      this.page++;
      this.getData();
      this.getFilteredUser(this.userSearch);
    }
  }

  prevPage() {
    if (this.page > 0) {
      this.page--;
    } else {
      this.page = 1;
    }
    this.getData();
    this.getFilteredUser(this.userSearch);
  }
  searchUser(searchValue: string) {
    this.userSearch = searchValue;
    this.getFilteredUser(this.userSearch);
  }
}

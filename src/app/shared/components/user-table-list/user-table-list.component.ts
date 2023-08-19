import { Component, OnInit } from '@angular/core';
import { userTest } from './../../../libs/constants/types';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-user-table-list',
  templateUrl: './user-table-list.component.html',
  styleUrls: ['./user-table-list.component.scss'],
})
export class UserTableListComponent implements OnInit {
  currentPage = 1;
  totalPages = 0;
  users!: userTest[];
  filteredUser!: userTest[];
  isLoading: boolean = true;
  userSearch: string = '';
  maxData = 100;
  maxPagination: number = 0;
  constructor(private _userService: UsersService) {}

  ngOnInit(): void {
    this.getData();
    this.totalPages = this._userService.getTotalPages();
    if (this.filteredUser) {
      this.isLoading = false;
    }
  }

  loadUserList(): void {
    this.users = this._userService.getUserList(this.currentPage);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getData();
    }
  }
  getData() {
    this.loadUserList();

    this.getFilteredUser(this.userSearch);
    this.maxPagination = this.maxData / this.users.length;
  }
  getFilteredUser(value: string = '') {
    if (value.trim().length < 1) {
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
  searchUser(searchValue: string) {
    this.userSearch = searchValue;
    this.getFilteredUser(this.userSearch);
  }
}

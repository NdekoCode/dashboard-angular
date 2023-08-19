import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERS } from '../libs/constants/constants';
import { userTest } from './../libs/constants/types';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  pageSize = 12;
  users!: userTest[];
  constructor(private _http: HttpClient, private _api: ApiConfigService) {}
  getUserList(page: number): userTest[] {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = page * this.pageSize;
    return USERS.slice(startIndex, endIndex);
  }

  getAllUsers(): userTest[] {
    return USERS;
  }
  getUsers(page: number, limit: number): userTest[] {
    return USERS;
  }

  getTotalPages(): number {
    return Math.ceil(USERS.length / this.pageSize);
  }
}

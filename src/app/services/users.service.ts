import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userTest } from './../libs/constants/types';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users!: userTest[];
  constructor(private _http: HttpClient, private _api: ApiConfigService) {}

  getUserList(): Observable<userTest[]> {
    return this._http.get<userTest[]>(this._api.BASE_URL + '/users');
  }
  getUsers(page: number, limit: number): Observable<userTest[]> {
    const skip = (page - 1) * limit;
    const url = `${this._api.BASE_URL}/users?_start=${skip}&_limit=${limit}`;
    return this._http.get<userTest[]>(url);
  }
}

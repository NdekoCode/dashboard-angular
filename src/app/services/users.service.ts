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
}

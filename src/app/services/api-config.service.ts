import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  public readonly BASE_URL = 'http://localhost:3000';
  constructor() {}
  public handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.log(`An error occurred : ${err.error.message}`);
    } else {
      console.log(
        `Backed returned code error ${err.status}, body was: ${err.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later')
    );
  }
}

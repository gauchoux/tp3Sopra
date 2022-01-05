import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './app.component';
import { Observable } from 'rxjs';
import { catchError, debounceTime, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdduserserviceService {

  constructor(private http : HttpClient) { }

  public addUserService(user : User): Observable<User> {
    return this.http.put<User>("http://localhost:10000/add", user);
  }

  public getUserList() : Observable<User[]> {
    return this.http.get<User[]>("http://localhost:10000/list");
  }

}

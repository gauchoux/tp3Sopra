import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './app.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdduserserviceService {

  test?: boolean;

  constructor(private http : HttpClient) { }

  public addUserService(user : User): Observable<User> {
    return this.http.put<User>("http://localhost:10000/add", user);
  }

  public getUserList() : Observable<User[]> {
    return this.http.get<User[]>("http://localhost:10000/list");
  }

  public getRight(): Observable<boolean>{
    return this.http.get<{right: boolean}>("http://localhost:10000/hasRight").pipe(map(x => x.right));
  }

  public changeRight(right : boolean): Observable<boolean> {
    return this.http.post<{right: boolean}>("http://localhost:10000/hasRight", {right}).pipe(map(x => x.right));
  }

}

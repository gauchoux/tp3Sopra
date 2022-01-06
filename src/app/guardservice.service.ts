import { Injectable } from '@angular/core';
import { AdduserserviceService } from './adduserservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardserviceService {

  listRight = false;

  constructor(public userService : AdduserserviceService) { }

  public getUserRight() : boolean {
    this.userService.getRight()
      .subscribe({
        next : right => this.listRight = right,
    })
    return this.listRight;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AdduserserviceService } from './adduserservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiendelagalaxyGuard implements CanActivate {

  constructor(public userService : AdduserserviceService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getRight().pipe(tap( x => {
      if(!x) {
        window.alert("No pasta");
      }
    } ))
    }

}

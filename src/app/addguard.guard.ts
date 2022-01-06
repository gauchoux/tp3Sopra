import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserserviceService } from './adduserservice.service';

@Injectable({
  providedIn: 'root'
})
export class AddguardGuard implements CanActivate {

constructor(public rightService : AdduserserviceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    window.alert("No pasta");
    return this.rightService.addchecked;
  }

}

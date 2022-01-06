import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserserviceService } from './adduserservice.service';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class GuardiendelagalaxyGuard implements CanActivate {

  listRight?: boolean;

  constructor(public getAddRight : AdduserserviceService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.getAddRight.getRight()
    .subscribe({
      next : right => this.listRight = right
    })
    if (this.listRight) {
      return true;
    }
    window.alert('You don\'t have permission to view this page');
    return false;
  }

}

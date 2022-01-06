import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddguardGuard } from './addguard.guard';
import { AdduserreacComponent } from './adduserreac/adduserreac.component';
import { GuardiendelagalaxyGuard } from './guardiendelagalaxy.guard';
import { ListuserComponent } from './listuser/listuser.component';

const routes: Routes = [
  { path: '', component: AdduserreacComponent, canActivate : [AddguardGuard] },
  { path: 'list', component: ListuserComponent, canActivate : [GuardiendelagalaxyGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

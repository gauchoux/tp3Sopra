import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserreacComponent } from './adduserreac/adduserreac.component';
import { AppComponent } from './app.component';
import { GuardiendelagalaxyGuard } from './guardiendelagalaxy.guard';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ProtectaddGuard } from './protectadd.guard';

const routes: Routes = [
  { path: '', component: AdduserreacComponent, canActivate : [ProtectaddGuard] },
  { path: 'list', component: ListuserComponent, canActivate : [GuardiendelagalaxyGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

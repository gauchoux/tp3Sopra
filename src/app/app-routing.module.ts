import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardiendelagalaxyGuard } from './guardiendelagalaxy.guard';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListuserComponent, canActivate : [GuardiendelagalaxyGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { AdduserserviceService } from '../adduserservice.service';
import { User } from '../app.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent {

  listUser?: User[];

  constructor(public readUserS : AdduserserviceService) {
    this.readUserS.getUserList()
    .subscribe({
      next : users => this.listUser = users
    });
   }

}

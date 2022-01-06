import { Component, OnInit } from '@angular/core';
import { AdduserserviceService } from '../adduserservice.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public appCc : AppComponent) {
   }
}

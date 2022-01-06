import { Component } from '@angular/core';
import { AdduserserviceService } from './adduserservice.service';

export interface User {
  nom : string;
  password : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tp3';

  constructor() {
   }
}



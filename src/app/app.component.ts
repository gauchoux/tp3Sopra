import { Component } from '@angular/core';

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

  choose = true;

  public addU(){
    this.choose = true;
  }

  public userL(){
    this.choose = false;
  }
}



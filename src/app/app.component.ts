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

  listRight?: boolean;

  constructor(public getRight : AdduserserviceService) {
    this.getRight.getRight()
    .subscribe({
      next : right => this.listRight = right
    });
   }

  public changeRight() {
    this.getRight.changeRight(!this.listRight!).subscribe({
      next : x => this.listRight = x
    });
  }

  public onCheckedAdd(){
    this.getRight.addchecked = !this.getRight.addchecked;
  }

}



import { Component, OnInit } from '@angular/core';
import { AdduserserviceService } from '../adduserservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  addchecked = true;
  choose = true;

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

  public addU(){
    this.choose = true;
  }

  public userL(){
    this.choose = false;
  }

  public onCheckedAdd(){
    this.addchecked = !this.addchecked;
  }

}

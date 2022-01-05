import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Observable } from 'rxjs';
import { AdduserserviceService } from '../adduserservice.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../validator';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})

export class AdduserComponent {

  title = 'Connexion';
  information = "";

  constructor(public addUserS : AdduserserviceService) { }


  public addUser(data : any) {
    let nomString = data.nom as string;
    let passString = data.password as string;
    let passConfString = data.passwordConf as string;
    if (passString === passConfString) {
      const newUser : User = {
        nom : nomString,
        password : passString
      }
      this.addUserS.addUserService(newUser).subscribe({
        next: () =>  this.information = "User " + nomString + " registered."
      });
    } else {
      this.information = "Passwords do not match";
    }
  }

}



import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdduserserviceService } from '../adduserservice.service';
import { User } from '../app.component';
import Validation from '../validator';

@Component({
  selector: 'app-adduserreac',
  templateUrl: './adduserreac.component.html',
  styleUrls: ['./adduserreac.component.scss']
})
export class AdduserreacComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  title = 'Connexion';
  information = "";

  constructor(private formBuilder: FormBuilder, public addUserS : AdduserserviceService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    let nomString = this.form.value.username as string;
    let passString = this.form.value.password as string;

    const newUser : User = {
      nom : nomString,
      password : passString
    }

    this.addUserS.addUserService(newUser).subscribe({
      next: () =>  this.information = "User " + nomString + " registered."
    });

    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


}

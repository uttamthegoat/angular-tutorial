import { Component } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userMail:string = "goat@mail.com";
  userPass:string = "ninnaPukli";
e: any;

  submitForm(e:any,mail:string,pass:string){
    // e.preventDefault();
    if(mail!==this.userMail){
      alert("User not found!");
    } else if (pass!==this.userPass){
      alert("Wrong password!");
    } else {
      alert("Successfully logged in")
    }
  }
}

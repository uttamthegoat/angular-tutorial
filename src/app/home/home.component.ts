import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[],
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name=""

  onSaveText(firstName:string, lastName: string){
    this.name=`${firstName} ${lastName}`
    console.log("button pressed");
  }
}
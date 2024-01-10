import { Component } from '@angular/core';

@Component({
  selector: 'app-fact-square',
  standalone: true,
  imports: [],
  templateUrl: './fact-square.component.html',
  styleUrl: './fact-square.component.css'
})
export class FactSquareComponent {
  fact: number = 1
  square: number = 0


  convert(str:string){
    return Number(str);
  }
  calculate(value:number) {
    for (let index = 1; index <= value; index++) {
      this.fact = this.fact * index;
    }
    this.square = value * value
  }
}

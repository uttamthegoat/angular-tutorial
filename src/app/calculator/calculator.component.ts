import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  resultVal:string=""
  btns:string[] = ["1","2","3","4","5","6","7","8","9","0",".","+","-","*","/","C","AC","%","="];

  btnfunction(btnVal:string){
    if (btnVal==="AC") {
      this.resultVal="";
    } else if(btnVal==="C"){
      this.resultVal=this.resultVal.slice(0, -1);
    } else if(btnVal==="="){
      this.resultVal=eval(this.resultVal)
    } else {
      this.resultVal=this.resultVal.concat(btnVal)
    }
  }
}

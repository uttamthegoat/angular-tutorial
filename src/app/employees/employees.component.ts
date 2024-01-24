import { Component } from '@angular/core';
import empList from './employees';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  employees:any = empList;
  searchSalary:number = 0;

  searchEmp(name:string,salary:string){
    this.searchSalary = Number(salary);
    
  }
}

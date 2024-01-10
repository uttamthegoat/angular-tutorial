import { Component } from '@angular/core';
import data from './studentInfo.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent {
  studentInfo:any=data
  studentCount=this.studentInfo.length
}

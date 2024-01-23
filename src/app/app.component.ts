import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FooterComponent } from './static/footer/footer.component'
import { NavbarComponent } from './static/navbar/navbar.component'
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FactSquareComponent } from './fact-square/fact-square.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component'
import { LoginComponent } from './login/login.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, FooterComponent,ShoppinglistComponent,CalculatorComponent,FactSquareComponent,StudentInfoComponent,TodoComponent,UsersComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'uttamthegoat';
}

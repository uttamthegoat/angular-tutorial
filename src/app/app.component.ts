import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FooterComponent } from './static/footer/footer.component'
import { NavbarComponent } from './static/navbar/navbar.component'
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, FooterComponent,ShoppinglistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'uttamthegoat';
}

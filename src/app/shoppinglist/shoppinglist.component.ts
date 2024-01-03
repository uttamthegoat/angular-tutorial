import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  items: string[] = ['Apple', 'Banana', 'Cherry', 'Date'];

  addItem(itemName:string){
    this.items.push(itemName);
  }
  removeItem(itemName:string){
    const indexToRemove = this.items.indexOf(itemName);

    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'platzi-store';

  items=['yordan','maria','andy']

  addItem(){
    this.items.push('nuevo Item');
  }

  deleteItem(index: number){
    this.items.splice(index,1);
  }
}

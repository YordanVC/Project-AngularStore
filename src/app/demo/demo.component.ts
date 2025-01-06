import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title = 'platzi-store';

  items=['yordan','maria','andy']

  power=10;
  

  addItem(){
    this.items.push('nuevo Item');
  }

  deleteItem(index: number){
    this.items.splice(index,1);
  }

}

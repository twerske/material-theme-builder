import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fruits = new FormControl();

  fruitsList: string[] = ['Cherry', 'Apple', 'Blueberry', 'Rhubarb', 'Marionberry'];
}

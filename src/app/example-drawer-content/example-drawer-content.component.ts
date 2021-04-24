import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-drawer-content',
  templateUrl: './example-drawer-content.component.html',
  styleUrls: ['./example-drawer-content.component.scss']
})
export class ExampleDrawerContentComponent {
  fruits: string[] = ['Cherry', 'Apple', 'Rhubarb', 'Marionberry'];
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-header',
  templateUrl: './example-header.component.html',
  styleUrls: ['./example-header.component.scss']
})
export class ExampleHeaderComponent {
  @Input() title: string | undefined;
  @Input() link: string | undefined;
}

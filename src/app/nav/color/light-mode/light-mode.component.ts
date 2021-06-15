import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularTheme, defaultAngularTheme } from '../../theme-generator/AngularTheme';

@Component({
  selector: 'app-light-mode',
  templateUrl: './light-mode.component.html',
  styleUrls: ['./light-mode.component.scss']
})
export class LightModeComponent implements OnInit {
  @Input() theme: AngularTheme | undefined;
  placeholder: AngularTheme;

  ngOnInit(): void {
    this.placeholder = defaultAngularTheme;
  }
}

import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fruits: string[] = ['Cherry', 'Apple', 'Rhubarb', 'Marionberry'];
  isDark: boolean;
  bodyStyles: CSSStyleDeclaration;
  overlayContainer: any;

  // foregroundKeys = [
  //   'base',
  //   'divider',
  //   'dividers',
  //   'disabled',
  //   'disabled-button',
  //   'disabled-text',
  //   'elevation',
  //   'hint-text',
  //   'secondary-text',
  //   'icon',
  //   'icons',
  //   'text',
  //   'slider-min',
  //   'slider-off',
  //   'slider-off-active'
  // ];

  // backgroundKeys = [
  //   'status-bar',
  //   'app-bar',
  //   'background',
  //   'hover',
  //   'card',
  //   'dialog',
  //   'disabled-button',
  //   'raised-button',
  //   'focused-button',
  //   'selected-button',
  //   'selected-disabled-button',
  //   'disabled-button-toggle',
  //   'unselected-chip',
  //   'disabled-list-option',
  //   'tooltip'
  // ];

  constructor(overlayContainer: OverlayContainer) {
    this.overlayContainer = overlayContainer;
  }

  ngOnInit(): void {
    this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme();
    this.bodyStyles = window.getComputedStyle(document.body);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.setTheme();
  }

  setTheme(): void {
    if (this.isDark) {
      document.documentElement.setAttribute('prefers-color-scheme', 'dark');
      document.documentElement.classList.add('dark-theme');
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      document.documentElement.setAttribute('prefers-color-scheme', 'light');
      document.documentElement.classList.remove('dark-theme');
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  }
}

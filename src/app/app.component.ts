import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fruits: string[] = ['Cherry', 'Apple', 'Rhubarb', 'Marionberry'];
  isDark: boolean;
  bodyStyles: CSSStyleDeclaration;

  constructor(private overlayContainer: OverlayContainer, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme();
    this.bodyStyles = window.getComputedStyle(document.body);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.setTheme();
  }

  setTheme(color?: string): void {
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

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

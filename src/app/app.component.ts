import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { themeToAngularScss } from './theme-generator/angular-theme-transformer';
import { defaultTheme } from './theme-generator/Theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fruits: string[] = ['Cherry', 'Apple', 'Rhubarb', 'Marionberry'];
  isDark: boolean;
  bodyStyles: CSSStyleDeclaration;
  downloadJsonHref: SafeUrl;

  constructor(private overlayContainer: OverlayContainer, private snackBar: MatSnackBar, private sanitizer: DomSanitizer) {}

  generateDownloadJsonUri(): void {
    // const theJSON = JSON.stringify(themeToAngularScss(defaultTheme));
    // const blob = new Blob([theJSON], { type: 'text/json' });
    // const url = window.URL.createObjectURL(blob);
    // const uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    // this.downloadJsonHref = uri;
    console.log(themeToAngularScss(defaultTheme));
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

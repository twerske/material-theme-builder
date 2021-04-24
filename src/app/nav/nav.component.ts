import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { themeToAngularSass } from './theme-generator/angular-theme-transformer';
import { defaultTheme } from './theme-generator/Theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  primary: string = "mat-blue"
  isDark: boolean;
  bodyStyles: CSSStyleDeclaration;
  downloadJsonHref: SafeUrl;

  constructor(private overlayContainer: OverlayContainer, private sanitizer: DomSanitizer) {}

  generateDownloadJsonUri(): void {
    // const theJSON = JSON.stringify(themeToAngularScss(defaultTheme));
    // const blob = new Blob([theJSON], { type: 'text/json' });
    // const url = window.URL.createObjectURL(blob);
    // const uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    // this.downloadJsonHref = uri;
    console.log(themeToAngularSass(defaultTheme));
  }

  ngOnInit(): void {
    this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme();
    this.bodyStyles = window.getComputedStyle(document.body);
    // applyStyles({...})
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.setTheme();
  }

  setTheme(): void {
    document.documentElement.classList.toggle('dark-theme', this.isDark);
    // this.overlayContainer.getContainerElement().classList.toggle('dark-theme', this.isDark);
  }
}

import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { applyStyles, themeToAngularSass } from './theme-generator/angular-theme-transformer';
import { AngularTheme, defaultAngularTheme } from './theme-generator/AngularTheme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  isDark: boolean;
  downloadJsonHref: SafeUrl;
  theme: AngularTheme = defaultAngularTheme;

  constructor(private sanitizer: DomSanitizer) {}

  generateDownloadJsonUri(): void {
    // const theJSON = JSON.stringify(themeToAngularScss(defaultTheme));
    // const blob = new Blob([theJSON], { type: 'text/json' });
    // const url = window.URL.createObjectURL(blob);
    // const uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    // this.downloadJsonHref = uri;
    console.log(themeToAngularSass(defaultAngularTheme));
  }

  ngOnInit(): void {
    this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme();
    applyStyles(this.theme);
  }

  ngOnChanges(): void {
    applyStyles(this.theme);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.setTheme();
  }

  setTheme(): void {
    document.documentElement.classList.toggle('dark-theme', this.isDark);
  }

  updateTheme(theme: AngularTheme): void {
    this.theme = theme;
  }
}

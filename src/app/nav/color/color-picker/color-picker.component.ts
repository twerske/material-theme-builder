import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { paletteMap } from '../../theme-generator/AngularPalettes';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit, OnChanges {
  @Input() palette = 'mat.$grey-palette';
  @Input() colorFromPalette: string;
  @Input() isContrast = false;
  @Input() isPalette = false;
  @Output() updateColor = new EventEmitter<string>();

  palettePresets: string[] = [];
  color = '#fff';

  ngOnInit(): void {
    this.setPaletteValues();
  }

  ngOnChanges(): void {
    this.setPaletteValues();
    if (paletteMap[this.palette][this.colorFromPalette]) {
      this.color = paletteMap[this.palette][this.colorFromPalette];
    } else {
      this.color = this.colorFromPalette;
    }
  }

  colorChange(value: string): void {
    if (this.isPalette) {
      for (const key in paletteMap) {
        if (value === paletteMap[key]['500']) {
          value = key;
          break;
        }
      }
    } else {
      for (const key in paletteMap[this.palette]) {
        if (value === paletteMap[this.palette][key]) {
          value = key;
          break;
        }
      }
    }
    this.updateColor.emit(value);
  }

  setPaletteValues(): void {
    this.palettePresets = [];
    if (this.isPalette) {
      for (const key in paletteMap) {
        if (paletteMap[key]['500']) { this.palettePresets.push(paletteMap[key]['500']); }
      }
    } else if (paletteMap[this.palette]) {
      for (const key in paletteMap[this.palette]) {
        if (typeof paletteMap[this.palette][key] === 'string') {
          this.palettePresets.push(paletteMap[this.palette][key]);
        }
      }
    }
  }
}

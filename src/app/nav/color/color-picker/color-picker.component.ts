import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { paletteMap } from '../../theme-generator/AngularPalettes';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit, OnChanges {
  @Input() palette: string = "mat.$grey-palette";
  @Input() colorFromPalette: string;
  @Input() isContrast: boolean = false;
  @Input() isPalette: boolean = false;
  @Output() updateColor = new EventEmitter<string>();
  
  palettePresets: string[] = [];
  color: string = '#fff';

  ngOnInit(): void {
    this.setPaletteValues();
  }

  ngOnChanges() {
    this.setPaletteValues();
    if (paletteMap[this.palette][this.colorFromPalette]) {
      this.color = paletteMap[this.palette][this.colorFromPalette];
    } else {
      this.color = this.colorFromPalette;
    }
  }

  colorChange(value: string): void {
    if (this.isPalette) {
      for (let key in paletteMap) {
        let paletteValue = paletteMap[key];
        if (value == paletteValue['500']) {
          value = key;
          break
        }
      }
    } else {
      for (let key in paletteMap[this.palette]) {
        let paletteValue = paletteMap[this.palette][key];
        if (value == paletteValue) {
          value = key;
          break
        }
      }
    }
    this.updateColor.emit(value);
  }

  setPaletteValues(): void {
    this.palettePresets = [];
    if (this.isPalette) {
      for (let key in paletteMap) {
        let value = paletteMap[key];
        this.palettePresets.push(value['500']);
      }
    } else if (paletteMap[this.palette]) {
      for (let key in paletteMap[this.palette]) {
        let value = paletteMap[this.palette][key];
        if (typeof value === 'string') this.palettePresets.push(value);
      }
    }
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';

import { MaterialModule } from './material.module';
import { NavComponent } from './nav/nav.component';
import { ButtonsComponent } from './example-drawer-content/example-components/buttons/buttons.component';
import { ToolbarComponent } from './example-drawer-content/example-components/toolbar/toolbar.component';
import { SidenavComponent } from './example-drawer-content/example-components/sidenav/sidenav.component';
import { ProgressBarComponent } from './example-drawer-content/example-components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './example-drawer-content/example-components/progress-spinner/progress-spinner.component';
import { SwitchComponent } from './example-drawer-content/example-components/switch/switch.component';
import { CheckboxComponent } from './example-drawer-content/example-components/checkbox/checkbox.component';
import { RadioButtonComponent } from './example-drawer-content/example-components/radio-button/radio-button.component';
import { IconButtonComponent } from './example-drawer-content/example-components/icon-button/icon-button.component';
import { ChipsComponent } from './example-drawer-content/example-components/chips/chips.component';
import { ListComponent } from './example-drawer-content/example-components/list/list.component';
import { FabComponent } from './example-drawer-content/example-components/fab/fab.component';
import { CardComponent } from './example-drawer-content/example-components/card/card.component';
import { InputComponent } from './example-drawer-content/example-components/input/input.component';
import { SelectComponent } from './example-drawer-content/example-components/select/select.component';
import { TabsComponent } from './example-drawer-content/example-components/tabs/tabs.component';
import { SliderComponent } from './example-drawer-content/example-components/slider/slider.component';
import { SnackbarComponent } from './example-drawer-content/example-components/snackbar/snackbar.component';
import { ExampleHeaderComponent } from './example-header/example-header.component';
import { ExampleDrawerContentComponent } from './example-drawer-content/example-drawer-content.component';
import { ColorComponent } from './nav/color/color.component';
import { TypographyComponent } from './nav/typography/typography.component';
import { DensityComponent } from './nav/density/density.component';
import { StylingComponent } from './nav/styling/styling.component';
import { LightModeComponent } from './nav/color/light-mode/light-mode.component';
import { DarkModeComponent } from './nav/color/dark-mode/dark-mode.component';
import { ColorPickerComponent } from './nav/color/color-picker/color-picker.component';

import { FontPickerModule } from 'ngx-font-picker';
import { FONT_PICKER_CONFIG } from 'ngx-font-picker';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ToolbarComponent,
    SidenavComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    SwitchComponent,
    CheckboxComponent,
    RadioButtonComponent,
    IconButtonComponent,
    NavComponent,
    ChipsComponent,
    ListComponent,
    FabComponent,
    CardComponent,
    InputComponent,
    SelectComponent,
    TabsComponent,
    SliderComponent,
    SnackbarComponent,
    ExampleHeaderComponent,
    ExampleDrawerContentComponent,
    ColorComponent,
    TypographyComponent,
    DensityComponent,
    StylingComponent,
    LightModeComponent,
    DarkModeComponent,
    ColorPickerComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    FontPickerModule,
  ],
  providers: [
    {
      provide: FONT_PICKER_CONFIG,
      useValue: environment.key
    },
    { provide: USE_FUNCTIONS_EMULATOR, useValue: environment.useEmulators ? ['localhost', 5001] : undefined },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

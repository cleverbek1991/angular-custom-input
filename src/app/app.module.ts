import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { PercentageInputComponent } from './p-input/p-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CustomInputComponent, CurrencyInputComponent, PercentageInputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

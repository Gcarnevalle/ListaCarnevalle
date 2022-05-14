import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { RoundBlockDirective } from './round-block.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    InterpolacionComponent,
    RoundBlockDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

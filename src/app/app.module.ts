import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitlePipe } from './pipes/capitalize.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TitlePipe,
    SecureDomPipe
  ],

  imports: [
    BrowserModule
  ],

  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

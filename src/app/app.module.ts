import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqrtPipe } from './shared/pipes/sqrt.pipe';
import { ExtesionDatePipe } from './shared/pipes/extesion-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    ExtesionDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

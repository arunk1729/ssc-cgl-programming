import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { SscModule } from './ssc/ssc.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SscModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

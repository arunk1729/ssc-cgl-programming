import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from './common/common.module';
import { AppComponent } from './app.component';
import { SscModule } from './ssc/ssc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SscModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

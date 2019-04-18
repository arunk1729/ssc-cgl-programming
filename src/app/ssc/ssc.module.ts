import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SscRoutingModule } from './ssc-routing.module';
import { RatioProportionsComponent } from './ratio-proportions/ratio-proportions.component';
import { SscMainComponent } from './ssc-main/ssc-main.component';

@NgModule({
  declarations: [RatioProportionsComponent, SscMainComponent],
  imports: [
    CommonModule,
    SscRoutingModule
  ],
  exports: [
    RatioProportionsComponent
  ]
})
export class SscModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SscRoutingModule } from './ssc-routing.module';
import { RatioProportionsComponent } from './ratio-proportions/ratio-proportions.component';

@NgModule({
  declarations: [RatioProportionsComponent],
  imports: [
    CommonModule,
    SscRoutingModule
  ],
  exports: [
    RatioProportionsComponent
  ]
})
export class SscModule { }

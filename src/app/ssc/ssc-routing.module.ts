import { RatioProportionsComponent } from './ratio-proportions/ratio-proportions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'ssc.rp', component: RatioProportionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SscRoutingModule { }

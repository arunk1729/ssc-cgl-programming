import { AppRoutingModule } from './../app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent
  ],
  providers: [
    
  ]
})
export class CommonModule { }

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent
  ]
})
export class CommonModule { }

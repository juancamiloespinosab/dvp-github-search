import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule, allIcons  } from 'ngx-bootstrap-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  exports: [
    NgxBootstrapIconsModule
  ]
})
export class SharedModule { }

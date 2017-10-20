import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlusMinusComponent } from './plus-minus/plus-minus.component';
import { UserFilterPipe } from './user-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UserFilterPipe, PlusMinusComponent],    // to make it available to other modules that import this module
  declarations: [PlusMinusComponent, UserFilterPipe]
})
export class SharedModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatedPipe} from './paginated.pipe';
import {AgePipe} from './age.pipe';
import {GenderPipe} from './gender.pipe';

@NgModule({
  declarations: [
    AgePipe,
    GenderPipe,
    PaginatedPipe
  ],
  exports: [
    AgePipe,
    GenderPipe,
    PaginatedPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}

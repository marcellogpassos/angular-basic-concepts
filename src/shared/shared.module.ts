import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatedPipe } from './paginated.pipe';



@NgModule({
    declarations: [PaginatedPipe],
    exports: [
        PaginatedPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }

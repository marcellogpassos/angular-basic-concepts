import {Pipe, PipeTransform} from '@angular/core';
import {PaginationSettings} from './pagination-settings';

@Pipe({
  name: 'paginated'
})
export class PaginatedPipe implements PipeTransform {

  transform(value: any[], settings: PaginationSettings): any[] {
    if (!value) {
      return null;
    }
    const start = (settings.page - 1) * settings.pageSize;
    return value.slice(start, start + settings.pageSize);
  }
}

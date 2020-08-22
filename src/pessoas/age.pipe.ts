import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): number {
    if (!value) {
      return null;
    }
    return moment().diff(moment(value), 'year');
  }
}

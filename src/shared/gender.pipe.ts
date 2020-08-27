import {Pipe, PipeTransform} from '@angular/core';
import {Gender} from '../pessoas/pessoas.model';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Gender): string {
    if (!value) {
      return null;
    }
    return Gender.Male === value ? 'Masculino' : 'Feminino';
  }

}

import {Pessoa, PessoasQueryParameters} from './pessoas.model';
import * as moment from 'moment';

export class PessoasFilter {

  constructor(private queryParameters: PessoasQueryParameters) {

  }

  /**
   *
   * 1. Se não for passado nenhum queryParameter, deve passar no filtro
   * 2. Para cada parâmetro passado deve ser feita a validação:
   *    2.1. Gênero: deve ser igual
   *    2.2. Nome: o nome da pessoa deve conter o valor do parâmetro, ignorando o case
   *    2.3. Cidade: o nome da cidade deve conter o valor do parâmetro, ignorando o case
   *    2.4. Data de nascimento: a idade da pessoa deve estar entre os limites especificados nos parâmetros
   *
   */
  filter(pessoa: Pessoa): boolean {
    return !this.queryParameters || (
      this.filterGender(pessoa) &&
      this.filterContains(pessoa.name, this.queryParameters.name) &&
      this.filterContains(pessoa.city, this.queryParameters.city) &&
      this.filterAgeBetween(pessoa.birthday, this.queryParameters.minAge, this.queryParameters.maxAge));
  }

  private filterGender = (pessoa: Pessoa) => !this.queryParameters.gender || pessoa.gender === this.queryParameters.gender;

  private filterContains = (text: string, filter: string): boolean => {
    return !filter || text?.toLowerCase().indexOf(filter.trim().toLowerCase()) >= 0;
  }

  private filterAgeBetween = (birthday: Date, minAge: number, maxAge: number): boolean => {
    const age = moment().diff(moment(birthday), 'year');
    return (!minAge || age >= minAge) && (!maxAge || age <= maxAge);
  }
}

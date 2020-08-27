import {Injectable} from '@angular/core';
import {Pessoa, PessoasQueryParameters} from './pessoas.model';
import {from, Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {filter, flatMap, map, toArray} from 'rxjs/operators';
import {CsvReader} from './csv-reader.service';
import {PessoasFilter} from './pessoas.filter';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private api: string;

  constructor(
    private http: HttpClient,
    private csvReader: CsvReader) {
    this.api = environment.api;
  }

  /**
   *
   * 1. Buscar o arquivo CSV do backend
   * 2. Converter esse arquivo em um array de Pessoa
   * 3. Filtrar esse array de acordo com os queryParameters
   *
   */
  find(queryParameters?: PessoasQueryParameters): Observable<Pessoa[]> {
    const pessoasFilter = new PessoasFilter(queryParameters);
    return this.http.get(`${this.api}/pessoas`, {responseType: 'text'})
      .pipe(
        map(this.csvReader.read, this.csvReader),
        flatMap(from),
        filter(pessoasFilter.filter, pessoasFilter),
        toArray(),
      );
  }
}

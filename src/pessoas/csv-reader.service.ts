import {Injectable} from '@angular/core';
import {Gender, Pessoa} from './pessoas.model';

@Injectable({
  providedIn: 'root'
})
export class CsvReader {

  constructor() {
  }

  private static isValid(line: string): boolean {
    return line.trim().length > 0 && line.split(',').length === 5;
  }

  private static readLine(line: string): Pessoa {
    const columns = line.split(',');
    return {
      id: +columns[0],
      gender: columns[1] as Gender,
      name: columns[2],
      city: columns[3],
      birthday: new Date(columns[4])
    };
  }

  /**
   *
   * 1. Remover o cabeçalho
   * 2. Filtrar as linhas do arquivo corrompidas
   * 3. Converter as linhas do arquivo em uma Pessoas
   *
   */
  read(fileContent: string): Pessoa[] {
    const [, ...headerRemoved] = fileContent.split('\n');
    return headerRemoved
      .filter(CsvReader.isValid)
      .map(CsvReader.readLine);
  }
}

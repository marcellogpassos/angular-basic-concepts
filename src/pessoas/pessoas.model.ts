export enum Gender {
  Female = 'female',
  Male = 'male'
}

export interface Pessoa {
  id: number;
  gender: Gender;
  name: string;
  city: string;
  birthday: Date;
}

export interface PessoasQueryParameters {
  gender?: Gender;
  name?: string;
  city?: string;
  minAge?: number;
  maxAge?: number;
}

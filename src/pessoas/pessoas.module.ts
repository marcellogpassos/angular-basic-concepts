import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PessoasRoutingModule} from './pessoas-routing.module';
import {ListarPessoasComponent} from './listar-pessoas/listar-pessoas.component';
import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {PessoasService} from './pessoas.service';
import {CsvReader} from './csv-reader.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarPessoasComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PessoasRoutingModule,
    NgbAlertModule,
    FormsModule,
    NgbPaginationModule,
    SharedModule
  ],
  providers: [
    CsvReader,
    PessoasService,
  ]
})
export class PessoasModule {
}

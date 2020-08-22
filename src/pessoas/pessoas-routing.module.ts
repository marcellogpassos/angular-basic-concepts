import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListarPessoasComponent} from './listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  {
    path: '',
    component: ListarPessoasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule {
}

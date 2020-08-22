import {Component, OnInit} from '@angular/core';
import {PessoasService} from '../pessoas.service';
import {Gender, Pessoa, PessoasQueryParameters} from '../pessoas.model';
import {Observable} from 'rxjs';
import {flatMap, tap} from 'rxjs/operators';
import {PaginationSettings} from '../../shared/pagination-settings';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css']
})
export class ListarPessoasComponent implements OnInit {

  Gender = Gender;

  queryParameters: PessoasQueryParameters = {
    minAge: 20,
    maxAge: 60
  };

  pessoas$: Observable<Pessoa[]>;
  loading: boolean;
  paginationSettings: PaginationSettings;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoasService: PessoasService) {
  }

  /**
   *
   * 1. Copia os parâmetros de query provenientes da rota para a variável de classe
   * 2. Realiza a consulta no serviço
   * 3. Atualiza as configurações de paginação e loading
   *
   */
  ngOnInit(): void {
    this.loading = true;
    this.pessoas$ = this.route.queryParams
      .pipe(
        tap(params => Object.assign(this.queryParameters, params)),
        flatMap(() => this.pessoasService.find(this.queryParameters)),
        tap(result => this.updatePaginationAndLoading(result.length))
      );
  }

  buscar(): void {
    this.router.navigate(['pessoas'], {queryParams: this.queryParameters});
  }

  updatePage(page: number): void {
    this.paginationSettings = {
      collectionSize: this.paginationSettings.collectionSize,
      pageSize: this.paginationSettings.pageSize,
      page
    };
  }

  private updatePaginationAndLoading = (collectionSize: number) => {
    this.paginationSettings = {collectionSize, page: 1, pageSize: 10};
    this.loading = false;
  }
}

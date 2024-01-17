import { Component } from '@angular/core';
import { Pagina } from '../models/paginas';
import { PaginaService } from '../services/paginaService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paginas',
  templateUrl: 'paginas.page.html',
  styleUrls: ['paginas.page.scss'],
})
export class PaginasPage {

  constructor(
    private http: HttpClient
  ) {
    this.carregaPaginas()
  }

  public paginas: Pagina[]

  async carregaPaginas(){
    this.paginas = await new PaginaService(this.http).todos();
  }

}

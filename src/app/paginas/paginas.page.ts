import { Component } from '@angular/core';
import { Pagina } from '../models/paginas';
import { PaginaService } from '../services/paginaService';
import { HttpClient } from '@angular/common/http';
import { PaginaFormComponent } from './pagina-form/pagina-form.component';

@Component({
  selector: 'app-paginas',
  templateUrl: 'paginas.page.html',
  styleUrls: ['paginas.page.scss'],
})
export class PaginasPage {

  constructor(
    private http: HttpClient,
  ) {
    this.carregaPaginas(),
    PaginasPage.setInstance(this);
  }

  public paginas: Pagina[]
  form:boolean = false
  maisItensPaginado: boolean = false
  page: number = 1
  pagina: Pagina


  async carregaPaginas(){
    this.page = 1
    this.paginas = await new PaginaService(this.http).todos();

    if(this.paginas.length == 2)
    {
      this.maisItensPaginado = true
    }
  }

  private static _instance: PaginasPage

  static setInstance(admPage:PaginasPage){
    PaginasPage._instance = admPage;
  }

  static getInstance(): PaginasPage{
    return PaginasPage._instance;
  }

  async maisItens(){
    this.page += 1;
    let pgs = await new PaginaService(this.http).todos(this.page);
    this.paginas = this.paginas.concat(pgs)
    if(pgs.length < 2)
    {
      this.maisItensPaginado = false
    }
  }

  abrirForm(){
    if(!this.form) this.form = true
    else this.form = false
  }

  async excluir(pagina:Pagina){
    if(confirm("Confirma a exclusão?")){
    await new PaginaService(this.http).excluir(pagina)
    this.carregaPaginas()
    }
  }

  alterar(pagina: Pagina){
    PaginaFormComponent.page = pagina
    this.abrirForm()

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagina } from 'src/app/models/paginas';
import { PaginaService } from 'src/app/services/paginaService';
import { PaginasPage } from '../paginas.page';
import { Administrador } from 'src/app/models/administrador';
import { SessionService } from 'src/app/services/sessionService';

@Component({
  selector: 'app-pagina-form',
  templateUrl: './pagina-form.component.html',
  styleUrls: ['./pagina-form.component.scss'],
})
export class PaginaFormComponent  implements OnInit {

  constructor(private http:HttpClient) { }



  ngOnInit(): void {
    if(PaginaFormComponent.page){
      this.pagina = PaginaFormComponent.page
    }
  }


  static page: Pagina

  emptyPage: Pagina = {id: 0, nome: null, conteudo: null, areaRestrita: null, login: null,
                       home: null, ordem: null}
  pagina: Pagina = this.emptyPage

  salvar(){
    let admLogado: Administrador = SessionService.get("admLogado")
    new PaginaService(this.http).salvar(admLogado.token, this.pagina)
    this.pagina = this.emptyPage
    alert('Salvo no banco de dados')
    PaginasPage.getInstance().form = false;
    PaginasPage.getInstance().carregaPaginas();
  }

  cancelar(){
    this.pagina = this.emptyPage
    PaginasPage.getInstance().form = false;
  }

}

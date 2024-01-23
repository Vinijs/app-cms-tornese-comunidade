import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administradorService';
import { AdministradoresPage } from '../administradores.page';

@Component({
  selector: 'app-adm-form',
  templateUrl: './adm-form.component.html',
  styleUrls: ['./adm-form.component.scss'],
})
export class AdmFormComponent  implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    if(AdmFormComponent.adm){
      this.administrador = AdmFormComponent.adm
    }
  }


  static adm: Administrador

  emptyAdm: Administrador = {id: 0, nome: null, telefone: null, email: null, senha: null}
  administrador: Administrador = this.emptyAdm

}

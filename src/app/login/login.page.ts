import { Component, OnInit } from '@angular/core';
import { Administrador } from '../models/administrador';
import { AdministradorService } from '../services/administradorService';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../services/sessionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  erro: string = ""
  administrador: Administrador =
  {
    id: 0,
    nome: "",
    telefone: "",
    email: "",
    token: "",
    senha: ""
  }

  async logar(){
    let admService = new AdministradorService(this.http)
    try{
      let admLogado: Administrador = await admService.login(this.administrador)
      SessionService.set("admlogado", admLogado);
      this.router.navigateByUrl("/home")
    }
    catch(e){
      this.erro = "Login ou senha inválidos!"
    }
  }

}

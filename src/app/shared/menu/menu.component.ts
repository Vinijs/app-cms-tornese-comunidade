import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router) { }

    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  home(){
    this.router.navigateByUrl("/home")
  }

  paginas(){
    this.router.navigateByUrl("/paginas")
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


}

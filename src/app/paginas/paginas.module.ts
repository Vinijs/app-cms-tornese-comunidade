import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PaginasPage } from './paginas.page';

import { PaginasRoutingModule } from './paginas-routing.module';
import { MenuComponent } from '../shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PaginasRoutingModule
  ],
  declarations: [
    PaginasPage,
    MenuComponent,]
})
export class PaginasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradoresPageRoutingModule } from './administradores-routing.module';

import { AdministradoresPage } from './administradores.page';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from '../shared/menu/menu.component';
import { AdmFormComponent } from './adm-form/adm-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AdministradoresPageRoutingModule,

  ],
  declarations: [AdministradoresPage, MenuComponent, AdmFormComponent]
})
export class AdministradoresPageModule {}

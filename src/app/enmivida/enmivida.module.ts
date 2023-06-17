import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnmividaPageRoutingModule } from './enmivida-routing.module';

import { EnmividaPage } from './enmivida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnmividaPageRoutingModule
  ],
  declarations: [EnmividaPage]
})
export class EnmividaPageModule {}

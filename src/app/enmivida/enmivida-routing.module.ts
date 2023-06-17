import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnmividaPage } from './enmivida.page';

const routes: Routes = [
  {
    path: '',
    component: EnmividaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnmividaPageRoutingModule {}

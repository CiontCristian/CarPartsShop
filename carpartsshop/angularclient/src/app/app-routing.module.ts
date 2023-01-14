import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarPartShopMainPageComponent} from "./components/car-part-shop-main-page/car-part-shop-main-page.component";

const routes: Routes = [
  {path: "", component: CarPartShopMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

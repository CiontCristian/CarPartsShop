import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CarPartShopMainPageComponent } from './components/car-part-shop-main-page/car-part-shop-main-page.component';
import {CarService} from "./service/car.service";
import {CarPartService} from "./service/car-part.service";
import {CustomerService} from "./service/customer.service";
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import { CarPartCardComponent } from './components/car-part-card/car-part-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CarPartShopMainPageComponent,
    ToolbarComponent,
    CarPartCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  providers: [CarService, CarPartService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

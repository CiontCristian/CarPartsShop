import {Component, OnInit} from '@angular/core';
import {CarPart} from "../../model/carPart/car-part";
import {CarPartService} from "../../service/car-part.service";
import {Car} from "../../model/car/car";
import {CarService} from "../../service/car.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CarAddComponent} from "../car-add/car-add.component";
import {CarPartAddComponent} from "../car-part-add/car-part-add.component";
import {Invoice} from "../../model/invoice/invoice";

@Component({
  selector: 'app-car-part-shop-main-page',
  templateUrl: './car-part-shop-main-page.component.html',
  styleUrls: ['./car-part-shop-main-page.component.scss']
})
export class CarPartShopMainPageComponent implements OnInit{

  carParts: CarPart[][] = [];
  cars: Car[] | null = [];
  invoices: Invoice[] | null = [];

  constructor(private carPartsService: CarPartService,
              private carService: CarService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.body;
    })
    this.carPartsService.getInvoices().subscribe(response => {
      this.invoices = response.body;
    })
  }

  getCarPartForCar(id?: number, carIndex?: number) {
    this.carPartsService.getCarPartForCar(id)
      .subscribe(
        response => { // @ts-ignore
          this.carParts[carIndex] = response.body},
        error => console.log(error.error)
      )
  }

  openAddCarPartDialog(currentCar: Car) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      currentCar
    }

    const dialogRef = this.dialog.open(CarPartAddComponent,{
      width: '400px',
      height: '50%',
      data: dialogConfig.data
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result !== "cancel")
        window.location.reload();
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {CarPart} from "../../model/carPart/car-part";
import {CarPartService} from "../../service/car-part.service";
import {Car} from "../../model/car/car";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-car-part-shop-main-page',
  templateUrl: './car-part-shop-main-page.component.html',
  styleUrls: ['./car-part-shop-main-page.component.scss']
})
export class CarPartShopMainPageComponent implements OnInit{

  carParts: CarPart[][] = [];
  cars: Car[] | null = [];

  constructor(private carPartsService: CarPartService,
              private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.body;
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
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CarPart} from "../../model/carPart/car-part";
import {CarPartService} from "../../service/car-part.service";
import {Car} from "../../model/car/car";

@Component({
  selector: 'app-car-part-add',
  templateUrl: './car-part-add.component.html',
  styleUrls: ['./car-part-add.component.scss']
})
export class CarPartAddComponent {
  carPart: CarPart = new CarPart(0, undefined, undefined, undefined, undefined, undefined);
  car: Car | undefined;

  // @ts-ignore
  constructor(@Inject(MAT_DIALOG_DATA)  data,
    private carPartService: CarPartService,)
  {
    this.car = data.currentCar;
    console.log(this.car);
  }


  addCarPart() {
    this.carPart.car = this.car;
    this.carPartService.saveCarPart(this.carPart).subscribe(
      reponse => {
        console.log(this.carPart);
      },
      error => {
        console.log(error);
      }
    )
  }
}

import { Component } from '@angular/core';
import {Car} from "../../model/car/car";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent {
  car: Car = new Car(0, undefined, undefined, undefined, undefined);

  constructor(private carService: CarService) {
  }

  addCar() {
    this.carService.saveCar(this.car!).subscribe(
      reponse => {
        console.log(this.car);
      },
      error => {
        console.log(error);
      }
    )
  }
}

import {Component, OnInit} from '@angular/core';
import {CarPart} from "../../model/carPart/car-part";
import {CarPartService} from "../../service/car-part.service";

@Component({
  selector: 'app-car-part-shop-main-page',
  templateUrl: './car-part-shop-main-page.component.html',
  styleUrls: ['./car-part-shop-main-page.component.scss']
})
export class CarPartShopMainPageComponent implements OnInit{

  carParts: CarPart[] | undefined;

  constructor(private carPartsService: CarPartService) {
  }

  ngOnInit() {
    this.carPartsService.getCarParts().subscribe(data => {
      this.carParts = data;
    });
  }

}

import {Component, Input} from '@angular/core';
import {CarPart} from "../../model/carPart/car-part";

@Component({
  selector: 'app-car-part-card',
  templateUrl: './car-part-card.component.html',
  styleUrls: ['./car-part-card.component.scss']
})
export class CarPartCardComponent {
  @Input()
  carPart: CarPart | undefined;
}

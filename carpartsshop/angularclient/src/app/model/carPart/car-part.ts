import {Car} from "../car/car";

export class CarPart {
  id: Number | undefined;
  name: string | undefined;
  price: Number | undefined;
  description: string | undefined;
  car: Car | undefined;

  constructor(id: Number | undefined, name: string | undefined, price: Number | undefined, description: string | undefined, car: Car | undefined) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.car = car;
  }
}

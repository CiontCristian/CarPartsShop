import {Car} from "../car/car";
import {BaseEntity} from "../BaseEntity";

export class CarPart extends BaseEntity{
  name: string | undefined;
  price: Number | undefined;
  description: string | undefined;
  stock: Number | undefined;
  car: Car | undefined;

  constructor(id: number, name: string | undefined, price: Number | undefined, description: string | undefined, stock: Number | undefined, car: Car | undefined) {
    super(id);
    this.name = name;
    this.price = price;
    this.description = description;
    this.stock = stock;
    this.car = car;
  }
}

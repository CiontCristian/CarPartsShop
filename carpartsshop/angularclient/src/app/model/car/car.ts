import {BaseEntity} from "../BaseEntity";

export class Car extends BaseEntity{
  make: string | undefined;
  model: string | undefined;
  fuelType: string | undefined;
  year: BigInteger | undefined;


  constructor(id: number, make: string | undefined, model: string | undefined, fuelType: string | undefined, year: BigInteger | undefined) {
    super(id);
    this.make = make;
    this.model = model;
    this.fuelType = fuelType;
    this.year = year;
  }
}

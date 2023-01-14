export class Car {
  id:number | undefined;
  make: string | undefined;
  model: string | undefined;
  fuelType: string | undefined;
  year: BigInteger | undefined;


  constructor(id: number | undefined, make: string | undefined, model: string | undefined, fuelType: string | undefined, year: BigInteger | undefined) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.fuelType = fuelType;
    this.year = year;
  }
}

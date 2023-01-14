import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../model/car/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly carUrl: string;

  constructor(private http: HttpClient) {
    this.carUrl="http://localhost:8080/car";
  }

  public getCars() {
    return this.http.get<Car[]>(this.carUrl+"/findAll");
  }

  public saveCar(car: Car) {
    return this.http.post(this.carUrl+"/save", car);
  }
}

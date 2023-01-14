import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Car} from "../model/car/car";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly carUrl: string;

  constructor(private http: HttpClient) {
    this.carUrl="http://localhost:8080/car";
  }

  public getCars() : Observable<HttpResponse<Car[]>>{
    return this.http.get<Car[]>(this.carUrl+"/findAll", {observe: "response"});
  }

  public saveCar(car: Car) : Observable<HttpResponse<any>>{
    return this.http.post(this.carUrl+"/save", car, {observe: "response"});
  }
}

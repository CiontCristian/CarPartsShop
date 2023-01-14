import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {CarPart} from "../model/carPart/car-part";
import {Invoice} from "../model/invoice/invoice";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarPartService {

  private readonly carPartUrl: string;

  constructor(private http: HttpClient) {
    this.carPartUrl="http://localhost:8080/carpart";
  }

  public getCarParts() :Observable<HttpResponse<CarPart[]>>{
    return this.http.get<CarPart[]>(this.carPartUrl+"/findAll", {observe: "response"});
  }

  public getCarPartForCar(carId: number | undefined): Observable<HttpResponse<CarPart[]>> {
    return this.http.get<CarPart[]>(`${this.carPartUrl+"/findCarPartsForCar"}/${carId}`, {observe: "response"});
  }

  public saveCarPart(carPart: CarPart) {
    return this.http.post(this.carPartUrl+"/save", carPart);
  }

  public getInvoices() {
    return this.http.get<Invoice[]>(this.carPartUrl+"/findAllInvoices")
  }

  public saveCarPartInvoice(invoice: Invoice) {
    return this.http.post(this.carPartUrl+"/saveInvoice", invoice);
  }


}

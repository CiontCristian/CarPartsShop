import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarPart} from "../model/carPart/car-part";
import {Invoice} from "../model/invoice/invoice";

@Injectable({
  providedIn: 'root'
})
export class CarPartServiceService {

  private readonly carPartUrl: string;

  constructor(private http: HttpClient) {
    this.carPartUrl="http://localhost:8080/carpart";
  }

  public getCarParts() {
    return this.http.get<CarPartServiceService[]>(this.carPartUrl+"/findAll");
  }

  public getCarPartForCar(carId: Number) {
    return this.http.get<CarPartServiceService[]>(`${this.carPartUrl+"/findCarPartsForCar/"}/${carId}`);
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

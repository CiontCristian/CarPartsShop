import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../model/customer/customer";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private readonly validateCustomerUrl: string;

  constructor(private http: HttpClient) {
    this.validateCustomerUrl = "http://localhost:8080/customer/validateCredentials/"
  }

  public validateCredentials(email: string): Observable<Customer[]> {
      return this.http.get<Customer[]>(`${this.validateCustomerUrl}/${email}`);
    }

}

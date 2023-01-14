import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../model/customer/customer";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly validateCustomerUrl: string;

  constructor(private http: HttpClient) {
    this.validateCustomerUrl = "http://localhost:8080/customer/validateCredentials/"
  }

  public validateCredentials(email: string): Observable<boolean> {
      return this.http.get<boolean>(`${this.validateCustomerUrl}/${email}`);
    }

}

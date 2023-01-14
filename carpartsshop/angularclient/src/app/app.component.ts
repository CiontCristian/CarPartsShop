import { Component } from '@angular/core';
import {CarPart} from "./model/carPart/car-part";
import {CarPartService} from "./service/car-part.service";
import {CustomerService} from "./service/customer.service";
import {Customer} from "./model/customer/customer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  customers: Customer[] | undefined;

    constructor(private customerService: CustomerService) {
      this.title = 'Car Parts Shop';
    }

    public validateCustomer(email: string) : Observable<boolean> {
      return this.customerService.validateCredentials(email);
    }

}

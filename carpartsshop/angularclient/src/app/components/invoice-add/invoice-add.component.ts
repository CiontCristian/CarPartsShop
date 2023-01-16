import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CarPartService} from "../../service/car-part.service";
import {CarPart} from "../../model/carPart/car-part";
import {Invoice} from "../../model/invoice/invoice";
import {Customer} from "../../model/customer/customer";

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss']
})
export class InvoiceAddComponent {
  customer: Customer = new Customer(0, undefined);
  invoice: Invoice = new Invoice(undefined, undefined, undefined, undefined, new Date(Date.now()));
  carPart: CarPart = new CarPart(0, undefined, undefined, undefined, undefined, undefined);
  // @ts-ignore
  constructor(@Inject(MAT_DIALOG_DATA)  data,
              private carPartService: CarPartService,)
  {
    this.carPart = data.carPart;
    console.log(this.carPart);
  }


  addInvoice() {
    this.invoice.customer = this.customer;
    this.invoice.carPart = this.carPart;

    this.carPartService.saveCarPartInvoice(this.invoice).subscribe(
      reponse => {
        console.log(this.invoice);
      },
      error => {
        console.log("In error branch:" + error);
      }
    )
  }
}

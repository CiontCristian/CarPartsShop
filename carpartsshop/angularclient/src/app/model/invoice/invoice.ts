import {CarPart} from "../carPart/car-part";
import {Customer} from "../customer/customer";

export class Invoice {
  invoiceKey: InvoiceKey | undefined;
  customer: Customer | undefined;
  carPart: CarPart | undefined;
  details: string | undefined;
  date: Date | undefined;


  constructor(invoiceKey: InvoiceKey | undefined, customer: Customer | undefined, carPart: CarPart | undefined, details: string | undefined, date: Date | undefined) {
    this.invoiceKey = invoiceKey;
    this.customer = customer;
    this.carPart = carPart;
    this.details = details;
    this.date = date;
  }
}

export class InvoiceKey{
  carId: Number | undefined;
  customerId: Number | undefined;


  constructor(carId: Number | undefined, customerId: Number | undefined) {
    this.carId = carId;
    this.customerId = customerId;
  }
}

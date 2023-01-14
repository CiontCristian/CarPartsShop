import {CarPart} from "../carPart/car-part";
import {Customer} from "../customer/customer";

export class Invoice {
  invoiceKey: InvoiceKey | undefined;
  details: string | undefined;
  date: Date | undefined;
  carPart: CarPart | undefined;
  customer: Customer | undefined;

  constructor(invoiceKey: InvoiceKey | undefined, details: string | undefined, date: Date | undefined, carPart: CarPart | undefined, customer: Customer | undefined) {
    this.invoiceKey = invoiceKey;
    this.details = details;
    this.date = date;
    this.carPart = carPart;
    this.customer = customer;
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

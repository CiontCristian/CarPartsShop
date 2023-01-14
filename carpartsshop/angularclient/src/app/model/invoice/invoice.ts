import {CarPart} from "../carPart/car-part";
import {Customer} from "../customer/customer";

export class Invoice {
details: string | undefined;
date: Date | undefined;
carPart: CarPart | undefined;
customer: Customer | undefined;
}

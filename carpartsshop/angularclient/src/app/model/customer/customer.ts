import {BaseEntity} from "../BaseEntity";

export class Customer extends BaseEntity{
  email: string | undefined;

  constructor(id: number, email: string | undefined) {
    super(id);
    this.email = email;
  }
}

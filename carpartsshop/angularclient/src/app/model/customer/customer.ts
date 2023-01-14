export class Customer {
  id: Number | undefined;
  email: string | undefined;
  name: string | undefined;
  age: BigInteger | undefined;


  constructor(id: Number | undefined, email: string | undefined, name: string | undefined, age: BigInteger | undefined) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.age = age;
  }
}

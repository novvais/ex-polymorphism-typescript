import { Adress, User } from "./@types/types";

export class Client {
  name: string;
  email: string;
  cpf: string;
  dateRegister?: Date;
  addresses?: Adress[]

  constructor(user: User) {
    this.name = user.name;
    this.email = user.email;
    this.cpf = user.cpf;
    this.dateRegister = new Date()
    this.addresses = []
  }

  addAdress(adress: Adress): void {
    this.addresses?.push(adress);
  }
}

import { Account } from "./account";

export class CurrentAccount extends Account {
  private limit: number;

  constructor(dataAccount: Account) {
    super(dataAccount);

    this.limit = 100000;
  }

  deposit(value: number) {
    this.balance += value

    return `Balance: R$${(this.balance/ 100).toFixed(2)}`
  };

  withdraw(value: number, password: string) {
    if (this.password !== password) {
        return "Invalid password"
    }

    if (value > this.balance + this.limit) {
        return "The balance is insufficient"
    }

    this.balance -= value

    return `Balance: R$${(this.balance/ 100).toFixed(2)}`
  };
}

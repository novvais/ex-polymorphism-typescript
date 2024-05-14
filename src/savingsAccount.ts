import { Account } from "./account";

export class SavingsAccount extends Account {
  private yieldRate: number;

  constructor(dataAccount: Account) {
    super(dataAccount);
    
    this.yieldRate = 0.05;
  }

  deposit(value: number) {
    this.balance += value + value * this.yieldRate;

    return `Balance: R$${(this.balance / 100).toFixed(2)}`;
  }

  withdraw(value: number, password: string) {
    if (this.password != password) {
      return "Invalid password";
    }

    if (value > this.balance) {
      return "The balance is insufficient";
    }

    this.balance -= value;

    return `Balance: R$${(this.balance / 100).toFixed(2)}`;
  }
}

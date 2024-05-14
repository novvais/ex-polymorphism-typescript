import { Client } from "./client.ts";

export abstract class Account {
  public client: Client;
  public number: string;
  public agency: string;
  protected password: string;
  protected balance: number;

  constructor(account: Account) {
    // Object.assign(this, account)
    this.client = account.client,
    this.number = account.number,
    this.agency = account.agency,
    this.password = account.password,
    this.balance = account.balance
  }

  consultBalance(password: string) {
    if (this.password !== password) {
        return "Invalid password"
    }

    return `Balance: R$${(this.balance/ 100).toFixed(2)}`
  }

  abstract deposit(value: number): void

  abstract withdraw(value: number, password: string): void 
}

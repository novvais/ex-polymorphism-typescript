import { Client } from "./client";
import { CurrentAccount } from "./currentAccount";
import { SavingsAccount } from "./savingsAccount";

const edu = new Client({
    name: "Eduardo",
    email: "eduardodepaula@gmail.com",
    cpf: "12345678900"
})

const duda = new Client({
    name: "Eduarda",
    email: "eduardadepaula@gmail.com",
    cpf: "12345678901"
})

const savingsAccountDuda = new SavingsAccount({
    client: duda,
    number: "4321-01",
    agency: "341-2",
    password: "12345",
    balance: 50000
})

const currentAccountEdu = new CurrentAccount({
    client: edu,
    number: "4321-11",
    agency: "341-5",
    password: "123456",
    balance: 50000
})

savingsAccountDuda.consultBalance("12345")
savingsAccountDuda.deposit(500000)
savingsAccountDuda.withdraw(200000, "12345")
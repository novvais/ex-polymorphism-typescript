import { Client } from "../client.ts";

export type User = {
  name: string;
  email: string;
  cpf: string;
};

export type Adress = {
  cep: string;
  street: number;
  district: string;
  city: string;
};

export type Account = {
  client: Client;
  number: string;
  agency: string;
  password: string;
  balance: number;
};

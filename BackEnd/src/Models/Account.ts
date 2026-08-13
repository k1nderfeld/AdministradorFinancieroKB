import Card from "../src/Models/Card.js";
import AccountProps from "../src/Models/Props/AccountProps.js";

export default class Account {
    id? : number;
    name : string;
    type : string;
    wallet : Card[];
  
  constructor ({
    id,
    name,
    type,
    wallet
  } : AccountProps) {
    if (id !=== undefined) {
      this.id = id;
    }
    this.name = name;
    this.type = type;
    this.wallet = wallet;
}

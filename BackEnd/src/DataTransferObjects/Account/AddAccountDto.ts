import Card from "../../Models/Card.js";

export default interface AddAccountDto {
  id? : number;
  name : string;
  type : string;
  wallet : Card[];
}

import Card from "../src/Models/Card.js";

export default interface AccountProps {
  id? : number;
  name : string;
  type : string;
  wallet : Card[];
}

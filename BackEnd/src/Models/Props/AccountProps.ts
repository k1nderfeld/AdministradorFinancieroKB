import Card from "../Card.js";

export default interface AccountProps {
  id? : number;
  name : string;
  type : string;
  wallet : Card[];
}

import CardProps from "./Props/CardProps.js";

export default class Card {
    id? : number;
    cardNumber : number;
    holderName : string;
    expirationDate : string;
    brand : string;
    cardType : string;
    balance : number;

    constructor ({
        id,
        cardNumber,
        holderName,
        expirationDate,
        brand,
        cardType,
        balance
    } : CardProps ) {
        if (id !== undefined){
            this.id = id;
        }

        this.cardNumber = cardNumber;
        this.holderName = holderName;
        this.expirationDate = expirationDate;
        this.brand = brand;
        this.cardType = cardType;
        this.balance = balance;
    }
}
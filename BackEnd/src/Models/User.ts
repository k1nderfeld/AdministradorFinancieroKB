import type { UserProps } from "./Props/UserProps.js";

export default class User {
    id? : number;
    rut : string;
    status : boolean;
    name : string;
    lastName : string;
    birthDate : Date;
    phoneNumber : string;
    email : string;
    password : string;
    profilePicture? : string;

    constructor ({
        id,
        rut,
        status,
        name,
        lastName,
        birthDate,
        phoneNumber,
        email,
        password,
        profilePicture
    } : UserProps) {
        if (id !== undefined){
            this.id = id;
        }

        this.rut = rut;
        this.status = status;
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        
        if (profilePicture !== undefined){
            this.profilePicture = profilePicture;
        }
    }
}
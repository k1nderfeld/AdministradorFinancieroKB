export class User {
    constructor ({
        id, 
        rut, 
        name, 
        lastName, 
        phoneNumber, 
        email, 
        password
    }) {
        this.id = id;
        this.rut = rut;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
}
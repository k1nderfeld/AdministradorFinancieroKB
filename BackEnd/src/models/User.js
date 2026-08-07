export class User {
    constructor ({
        id = null, 
        rut, 
        name, 
        lastName, 
        phoneNumber, 
        email, 
        password,
        profilePicture = null
    }) {
        this.id = id;
        this.rut = rut;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}
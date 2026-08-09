export class CreateUserDto {
    constructor({
        rut,
        name,
        lastName,
        phoneNumber,
        email,
        password,
        profilePicture = null
}) {
        this.rut = rut;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}
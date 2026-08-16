import User from "../../Models/User.js"
import RegisterUserDto from "../../DataTransferObjects/User/userDtos/RegisterUserDto.js";

export default interface IUserRepository {
    findByEmail(email: String): Promise<User | null>;
    findByRut(rut: string): Promise<User | null>;
    addUser(userData: RegisterUserDto): Promise<User | null>;
}
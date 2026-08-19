import User from "../../Models/User.js"

export default interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    findByRut(rut: string): Promise<User | null>;
    create(user: User): Promise<User | null>;
}
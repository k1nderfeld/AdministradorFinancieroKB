import IUserRepository from "./Interfaces/IUserRepository.js";
import User from "../Models/User.js";
import prisma from "../Config/prisma.js";

export default class UserRepository implements IUserRepository{
    async findByEmail(email: string) : Promise<User | null> {
        return prisma.user.findUnique({
            where: {
                email
            }
        })
    }

    async findByRut(rut: string) : Promise<User | null> {
        return prisma.user.findUnique({
            where: {
                rut
            }
        })
    }

    async create(user: User) : Promise<User | null> {
        return prisma.user.create({
            data: {
                rut: user.rut,
                name: user.name,
                lastName: user.lastName,
                birthDate: user.birthDate,
                phoneNumber: user.phoneNumber,
                email: user.email,
                password: user.password,
                profilePicture: user.profilePicture
            }
        })
    }
}
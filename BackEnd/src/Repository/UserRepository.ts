import IUserRepository from "./Interfaces/IUserRepository.js";
import RegisterUserDto from "../DataTransferObjects/User/userDtos/RegisterUserDto.js";
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

    async create(userData: RegisterUserDto) : Promise<User | null> {
        return prisma.user.create({
            data: {
                rut: userData.rut,
                name: userData.name,
                lastName: userData.lastName,
                birthDate: userData.birthDate,
                phoneNumber: userData.phoneNumber,
                email: userData.email
            }
        })
    }
}
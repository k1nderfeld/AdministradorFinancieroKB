import type LoginDto from "../DataTransferObjects/User/auth/login/LoginDto.js";
import type LoginResponseDto from "../DataTransferObjects/User/auth/login/LoginResponseDto.js";

import type RegisterUserDto from "../DataTransferObjects/User/auth/register/RegisterUserDto.js";
import type RegisterUserResponse from "../DataTransferObjects/User/auth/register/RegisterUserResponse.js";

import type UpdateUserDto from "../DataTransferObjects/User/updateUser/UpdateUserDto.js";
import type UpdateUserResponse from "../DataTransferObjects/User/updateUser/UpdateUserResponse.js";

import IAuthServices from "./Interfaces/IAuthServices.js";
import User from "../Models/User.js";
import ValidateRut from "../Utils/ValidateRut.js";
import IUserRepository from "../Repository/Interfaces/IUserRepository.js";
import ValidateEmail from "../Utils/ValidateEmail.js";

export default class AuthServices implements IAuthServices {
    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        // Se recibe una instancia de IUserRepository para la llamada a base de datos
        this._userRepository = userRepository;
    }
    
    // Login
    async Login(loginDto: LoginDto): Promise<LoginResponseDto> {
        throw new Error("Método Login aún no implementado");
    }
    // Register
    async Register(registerDto: RegisterUserDto): Promise<RegisterUserResponse> {
        try {
            // Validamos si el RUT recibido esta en formato válido
            if (!ValidateRut.IsValidRut(registerDto.rut)) return this.#HandleRegister(400, "El RUT ingresado no es válido");
            // Validamos si el correo recibido esta en formato válido
            if (!ValidateEmail.IsValidEmail(registerDto.email)) return this.#HandleRegister(400, "El correo electrónico ingresado no es válido");
            // Definimos un usuario para obtener sus datos y validar
            let user: User | null;
            user = await this._userRepository.findByRut(ValidateRut.NormalizeRut(registerDto.rut));
            // Validamos si ya existe un usuario registrado con el rut 
            if (user) return this.#HandleRegister(409, "El RUT ingresado ya se encuentra registrado en el sistema");

            user = await this._userRepository.findByEmail(registerDto.email);
            // Validamos si ya existe un usuario registrado con el email 
            if (user) return this.#HandleRegister(409, "El correo electrónico ingresado ya se encuentra registrado en el sistema");

            const newUser = new User({
                rut: ValidateRut.NormalizeRut(registerDto.rut),
                name: registerDto.name.trim(),
                lastName: registerDto.lastName.trim(),
                birthDate: new Date(registerDto.birthDate),
                phoneNumber: registerDto.phoneNumber.trim(),
                email: registerDto.email.trim().toLowerCase(),
                password: null,
                profilePicture: null
            });

            await this._userRepository.create(newUser);

            return this.#HandleRegister(201, "Usuario registrado exitosamente");
                
        } catch (error){
            return this.#HandleRegister(500, "Error interno al registrar usuario");
        }
    }
    // Update
    async UpdateUser(updateUserDto: UpdateUserDto): Promise<UpdateUserResponse> {
        throw new Error("Método Update aún no implementado");
    }

    // Métodos privados
    #HandleRegister(code: number, message: string): RegisterUserResponse{
        return {
            code, 
            message
        }
    }
}
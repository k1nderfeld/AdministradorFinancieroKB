import type LoginDto from "../../DataTransferObjects/User/authDtos/LoginDto.js";
import type LoginResponseDto from "../../DataTransferObjects/User/authDtos/LoginResponseDto.js";

import type RegisterUserDto from "../../DataTransferObjects/User/authDtos/RegisterUserDto.js";
import type RegisterUserResponse from "../../DataTransferObjects/User/authDtos/RegisterUserResponse.js";

import type UpdateUserDto from "../../DataTransferObjects/User/userDtos/UpdateUserDto.js";
import type UpdateUserResponse from "../../DataTransferObjects/User/userDtos/UpdateUserResponse.js";

export default interface IAuthServices {
    // Servicio Inicio de sesión
    Login(loginDto : LoginDto): Promise<LoginResponseDto>;
    // Servicio Registro
    Register(registerDto : RegisterUserDto): Promise<RegisterUserResponse>;
    // Servicio actualización de datos personales
    UpdateUser(updateUserDto : UpdateUserDto): Promise<UpdateUserResponse>;
}
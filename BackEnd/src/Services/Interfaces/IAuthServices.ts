import type LoginDto from "../../DataTransferObjects/User/auth/login/LoginDto.js";
import type LoginResponseDto from "../../DataTransferObjects/User/auth/login/LoginResponseDto.js";

import type RegisterUserDto from "../../DataTransferObjects/User/auth/register/RegisterUserDto.js";
import type RegisterUserResponse from "../../DataTransferObjects/User/auth/register/RegisterUserResponse.js";

import type UpdateUserDto from "../../DataTransferObjects/User/updateUser/UpdateUserDto.js";
import type UpdateUserResponse from "../../DataTransferObjects/User/updateUser/UpdateUserResponse.js";

export default interface IAuthServices {
    // Servicio Inicio de sesión
    Login(loginDto : LoginDto): Promise<LoginResponseDto>;
    // Servicio Registro
    Register(registerDto : RegisterUserDto): Promise<RegisterUserResponse>;
    // Servicio actualización de datos personales
    UpdateUser(updateUserDto : UpdateUserDto): Promise<UpdateUserResponse>;
}
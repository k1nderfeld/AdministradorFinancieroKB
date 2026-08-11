import LoginDto from "../../DataTransferObjects/User/authDtos/LoginDto.js";
import LoginResponseDto from "../../DataTransferObjects/User/authDtos/LoginResponseDto.js";

import RegisterUserDto from "../../DataTransferObjects/User/userDtos/RegisterUserDto.js";
import RegisterUserResponse from "../../DataTransferObjects/User/userDtos/RegisterUserResponse.js";

import UpdateUserDto from "../../DataTransferObjects/User/userDtos/UpdateUserDto.js";
import UpdateUserResponse from "../../DataTransferObjects/User/userDtos/UpdateUserResponse.js";

export default interface IAuthServices {
    // Servicio Inicio de sesión
    login(loginDto : LoginDto): Promise<LoginResponseDto>;
    // Servicio Registro
    register(registerDto : RegisterUserDto): Promise<RegisterUserResponse>;
    // Servicio actualización de datos personales
    updateUser(updateUserDto : UpdateUserDto): Promise<UpdateUserResponse>;
}
import type LoginDto from "../DataTransferObjects/User/authDtos/LoginDto.js";
import type LoginResponseDto from "../DataTransferObjects/User/authDtos/LoginResponseDto.js";

import type RegisterUserDto from "../DataTransferObjects/User/userDtos/RegisterUserDto.js";
import type RegisterUserResponse from "../DataTransferObjects/User/userDtos/RegisterUserResponse.js";

import type UpdateUserDto from "../DataTransferObjects/User/userDtos/UpdateUserDto.js";
import type UpdateUserResponse from "../DataTransferObjects/User/userDtos/UpdateUserResponse.js";

import IAuthServices from "./Interfaces/IAuthServices.js";

export default class AuthServices implements IAuthServices{
    // login
    async login(loginDto: LoginDto): Promise<LoginResponseDto> {
        
    }
    // register
    async register(registerDto: RegisterUserDto): Promise<RegisterUserResponse> {
        
    }
    // update
    async updateUser(updateUserDto: UpdateUserDto): Promise<UpdateUserResponse> {
        
    }
}
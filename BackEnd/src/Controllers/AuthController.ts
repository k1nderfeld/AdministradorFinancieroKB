import type { Request, Response } from "express"; 
import type RegisterUserDto from "../DataTransferObjects/User/auth/register/RegisterUserDto.js";
import IAuthServices from "../Services/Interfaces/IAuthServices.js";

export default class AuthController {
    private _authServices : IAuthServices;

    constructor(authServices: IAuthServices){
        this._authServices = authServices;
    }

    async Register(req: Request, res: Response){
        // Se saca el DTO del usuario a registrar
        const registerUserDto: RegisterUserDto = req.body;
        
        const response = await this._authServices.Register(registerUserDto);
        // Se establece el codigo HTTP en conjunto con el body(.json) como response
        res.status(response.code).json(response);
    }
}
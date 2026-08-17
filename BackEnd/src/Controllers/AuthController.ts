import IAuthServices from "../Services/Interfaces/IAuthServices.js";

export default class AuthController {
    private _authServices : IAuthServices;

    constructor(authServices: IAuthServices){
        this._authServices = authServices;
    }

    
}
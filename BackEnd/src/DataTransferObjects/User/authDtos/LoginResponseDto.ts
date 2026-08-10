import DataLoginResponse from "./DataLoginResponse.js";

export default interface LoginResponseDto {
    success : boolean,
    message : string,
    data? : DataLoginResponse;
}
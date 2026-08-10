export default interface LoginResponseDto {
    success : bool;
    message : string;
    data? : DataLoginResponse;
}
export interface RegisterUserRequest {
    rut: string;
    name: string;
    lastName: string;
    birthDate: Date;
    phoneNumber: string;
    email: string;
}

export interface RegisterUserResponse {
    code: number;
    message: string;
}
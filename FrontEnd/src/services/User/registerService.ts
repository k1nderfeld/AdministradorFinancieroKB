import apiClient from "../../api/apiClient";
import type { RegisterUserRequest, RegisterUserResponse } from "../../interfaces/Auth/register.js";

export default async function handleRegister(newUserData: RegisterUserRequest): Promise<RegisterUserResponse> {
    const response = await apiClient.post("/auth/register", newUserData);

    return response.data;
}
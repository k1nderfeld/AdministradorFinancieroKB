import axios from "axios";

export default function handleApiError (error: unknown) {
    // Si es un error de Axios (backend)
    if (axios.isAxiosError(error)) {
        return (
            error.response?.data?.message ?? "An error ocurred while connecting to the server" // Si el contenido del error es undefined retornar un mensaje genérico
        );
    }
    
    if (error instanceof Error) {
        return (
            error.message
        );
    }

    return "An unknown error ocurred";
}
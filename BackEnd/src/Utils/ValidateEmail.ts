export default class ValidateEmail {
    static IsValidEmail (email: string): boolean{
        // Se evalúa si el correo rescibido cumple con la expresión regular
        // Un conjunto de caracteres seguidos de un @ seguido de un conjunto
        // de caracteres seguidos de un punto seguido de un conjunto de caracteres
        return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    }
}
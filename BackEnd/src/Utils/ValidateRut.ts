export default class ValidateRut {
    static IsValidRut(rut: string): boolean {        
        if (!this.#IsValidFormat(rut)) return false;
        
        const cleanRut = this.NormalizeRut(rut);
        // Validar RUT a través del algoritmo módulo 11
        let sum = 0;
        let multiplier = 2;
        // i es igual a la penultima posición(antes del dígito)
        // La iteración termina cuando se llega al primer dígito
        for (let i = cleanRut.length -2 ; i >= 0 ; i--){
            // Se parsea el dígito en cada iteración
            const digit = Number(cleanRut[i]);
            // Se multiplica cada dígito de der a izq por 2, 3, 4, 5, 6, 7, 2, 3
            sum += digit * multiplier;
            // Si el multiplicador es 7 se reinicia a 2
            // Si no, se incrementa en 1
            multiplier = multiplier === 7
                         ? 2
                         : multiplier + 1;
        }
        // Se guarda el resto de la división entre la sumatoria previa  y 11 
        const remainder = sum % 11;
        // Restamos a 11 para obtener el dígito verificador esperado
        const checkDigit = 11 - remainder;
        // Si el resultado es 11 el digito esperado se iguala a 0
        // Si es 10, se iguala a K
        // Si no se cumple ninguna de estas condiciones se parsea el digito a string
        const expectedCheckDigit = checkDigit === 11
                                   ? "0"
                                   : checkDigit === 10 
                                     ? "K"
                                     : checkDigit.toString();
        // Se obtiene el digito verificador original
        const actualCheckDigit = cleanRut[cleanRut.length -1];
        // Se evalúa si el digito verificador original es igual al esperado 
        return actualCheckDigit === expectedCheckDigit;
    }
    
    static #IsValidFormat(rut: string): boolean {
        if (!rut || rut.trim().length < 2) return false;

        const cleanRut = this.NormalizeRut(rut);
        // Si el formato cumple con el largo (7 u 8 dig) y el dig verificador esta entre 0-9 o K
        return /^\d{7,8}[0-9K]$/.test(cleanRut);
    }

    static NormalizeRut(rut: string): string {
        // Se eliminan los puntos y guión y se formatea a mayúsculas
        return rut.replaceAll(".", "").replace("-", "").toUpperCase();
    }
}
import app from "./src/app.js";
import dotenv from "dotenv";
import pool from "./src/config/database.js";

dotenv.config();

const result = pool.query();

console.log(result);

// ruta de prueba
app.listen(3000, () => {
    console.log("Iniciando servidor en el puerto 3000!");
});
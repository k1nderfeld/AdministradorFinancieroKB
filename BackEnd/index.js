import app from "./src/app.js";
import dotenv from "dotenv";
import pool from "./src/config/database.js";

const PORT = process.env.PORT || 3000;

try{
    const result = await pool.query("SELECT NOW()");

    console.log("Base de datos conectada!");
    console.log(result.rows[0]);

    app.listen(PORT, () => {
        console.log('Iniciando servidor en el puerto ${PORT}');
    });
} catch (error) {
    console.error("Error al conectar con la base de datos:");
    console.error(error.message);
    process.exit(1);
}
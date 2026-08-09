import "dotenv/config";

import app from "./app.js";
import pool from "./Config/database.js";

const PORT = process.env.PORT || 3000;

try{
    const result = await pool.query("SELECT NOW()");

    console.log("Base de datos conectada!");
    console.log(result.rows[0]);

    app.listen(PORT, () => {
        console.log(`Iniciando servidor en el puerto ${PORT}`);
    });
} catch (error) {
    console.error("Error al conectar con la base de datos:");
    console.error(error instanceof Error
                    ? error.message
                    : "Error desconocido"
    );

    process.exit(1);
}
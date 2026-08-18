import "dotenv/config";
import app from "./app.js";
import prisma from "./Config/prisma.js";

const PORT = process.env.PORT || 3000;

try{
    const result = await prisma.$queryRaw`SELECT 1`;

    console.log("Base de datos conectada!");

    app.listen(PORT, () => {
        console.log(`Servidor iniciado en: http://localhost:${PORT}`);
    });
} catch (error) {
    console.error("Error al conectar con la base de datos:");
    console.error(error instanceof Error
                    ? error.message
                    : "Error desconocido"
    );

    process.exit(1);
}
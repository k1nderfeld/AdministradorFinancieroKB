import prisma from "../Config/prisma.js";

export async function checkHealth(){
    const result = await prisma.$queryRaw`SELECT 1`;

    return {
        status: "OK",
        database: "Conectada"
    };
}
import type { Request, Response } from "express";
import { checkHealth } from "../Services/healthServices.js";

export async function getHealth(_req: Request, res: Response) {
    try{
        const data = await checkHealth();

        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            message: error instanceof Error
                ? error.message
                : "Error desconocido"
        });
    }
}
import { checkHealth } from "../services/healthService.js";

export async function getHealth(req, res) {
    try{
        const data = await checkHealth();

        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({
            status: Error,
            message: error.message
        });
    }
}
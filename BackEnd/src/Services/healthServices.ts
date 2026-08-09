import pool from "../Config/database.js";

export async function checkHealth(){
    const result = await pool.query("SELECT NOW()");

    return {
        status: "OK",
        database: "Conectada",
        serverTime: result.rows[0].now
    };
}
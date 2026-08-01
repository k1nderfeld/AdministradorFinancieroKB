// importe librerias
import express from "express";
import cors from "cors";
import { Client } from "pg";

//instacia aplicacion
const app = express();

// Middlewares
// intermediario frontend(React) con backend
app.use(cors());
// traductor JSON dentro de las peticiones
app.use(express.json());

// ruta de prueba
app.listen(3000, () => {
    console.log("Iniciando servidor en el puerto 3000!");
})
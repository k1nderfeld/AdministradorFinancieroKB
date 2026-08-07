// importe librerias
import express from "express";
import cors from "cors";
import { Client } from "pg";

import healthRoutes from "./routes/healthRoutes.js";

//instacia aplicacion
const app = express();

// Middlewares
// intermediario frontend(React) con backend
app.use(cors());
// traductor JSON dentro de las peticiones
app.use(express.json());

app.use()

export default app;
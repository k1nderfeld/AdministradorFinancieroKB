// importe librerias
import express from "express";
import cors from "cors";

import healthRoutes from "./Routes/HealthRoutes.js";
import AuthRoutes from "./Routes/AuthRoutes.js";

//instacia aplicacion
const app = express();

// Middlewares
// intermediario frontend(React) con backend
app.use(cors());
// traductor JSON dentro de las peticiones
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/auth", AuthRoutes);

export default app;
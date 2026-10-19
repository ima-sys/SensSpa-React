import express from "express";
import cors from "cors";

import clientsRoutes from "./routes/clients.routes.js"


const app = express();

const PORT = 3000;


app.use(cors());

app.use(express.json());


app.use(
    "/api/clients",
    clientsRoutes
);


app.listen(PORT, () => {

    console.log(
        `Servidor funcionando en http://localhost:${PORT}`
    );

});
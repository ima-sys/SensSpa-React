import type {
    Request,
    Response
} from "express";

import { Client } from "../services/client.type.js";

const clients: Client[] = [];


export function getClients(
    req: Request,
    res: Response
) {

    res.json(clients);

}


export function createClient(
    req: Request,
    res: Response
) {

    const {
        nombre,
        fecha,
        precio
    } = req.body;


    const newClient: Client = {

        id: clients.length + 1,

        nombre,

        fecha,

        precio: Number(precio),

        estado: "Confirmado"

    };


    clients.push(newClient);


    res.status(201).json(newClient);

}
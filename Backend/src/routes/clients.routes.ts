import { Router } from "express";

import {
    getClients,
    createClient
} from "../controller/clients.controller.js";

const router = Router();

router.get("/", getClients);

router.post("/", createClient);

export default router;
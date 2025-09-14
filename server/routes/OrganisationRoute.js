import express from "express";
import { getOrganisations } from "../controllers/OrganisationController.js";

const router = express.Router();

router.get("/organisations", getOrganisations);

export default router;

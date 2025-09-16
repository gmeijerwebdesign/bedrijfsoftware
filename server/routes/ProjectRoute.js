import express from "express";
import { getProjects } from "../controllers/ProjectController.js";
const router = express.Router();

router.get("/projects", getProjects);

export default router;

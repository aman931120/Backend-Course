import { Router } from "express";
import {healthcheck} from '../controller/heatlhcheck.controllers.js';

const router = Router()
// api/v1/healthcheck/test

router.route("/").get(healthcheck)
// it will send us to healthcheck controller 
// router.route("/test").get(healthcheck);

export default router;
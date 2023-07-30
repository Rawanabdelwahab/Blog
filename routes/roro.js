import { Router } from "express"
import { roro } from "../controllers/roro.js";
const router = new Router();

router.get('/', roro)

export default router;
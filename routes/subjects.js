import { Router } from "express"
import { create, index, store, show } from "../controllers/subject.js";
const router = new Router();

router.get('/', index)
router.get('/create', create)
router.post('/', store)
router.get('/:_id', show)
export default router;
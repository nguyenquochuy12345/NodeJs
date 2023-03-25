import express from "express";
import {
  getAll,
  getDetail,
  remove,
  add,
  update
} from "../controllers/product.js";
const router = express.Router();

router.get("/products", getAll);
router.get("/product/:id", getDetail);
router.patch("/product/:id", update);
router.post("/product", add);
router.delete("/product/:id", remove);

export default router;


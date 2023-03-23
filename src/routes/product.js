import express from "express";
import {

  create

  
} from "../controllers/product.js";
const router = express.Router();

// router.put("/product/:id", update);
// router.delete("/product/:id", remove);
// router.get("/products", getAll);
// router.get("/product/:id", getDetail);
router.post("/product", create);

export default router;


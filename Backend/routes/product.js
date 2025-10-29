import express from "express";
import {createProduct,getProducts,getProductById,updateProduct,deleteProduct,} from "../controller/product.js";
import {protect,authorize} from "../middleware/auth.js"

const router = express.Router();

router.post("/",protect,authorize("admin"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", protect,authorize("admin"),updateProduct);
router.delete("/:id",protect,authorize("admin"), deleteProduct);

export default router;

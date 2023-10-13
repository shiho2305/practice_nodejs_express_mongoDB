import express from 'express';
import productController from '../controller/product.js';

const productRouter = express.Router();

productRouter.get("/", productController.getAll);
productRouter.get("/detail/:id", productController.getById);
productRouter.delete("/delete/:id", productController.deleteById);

export default productRouter;
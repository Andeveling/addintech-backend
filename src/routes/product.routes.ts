import { IRouter, Router } from 'express';
import { authorization } from '../middlewares/authorization';
import * as ProductController from '../controllers/product.controller';
import upload from '../libs/multer';

const productRoutes: IRouter = Router();

productRoutes.get('/products', ProductController.getAllProducts);
productRoutes.get('/products/:id', ProductController.getProduct);
productRoutes.post('/products', authorization, upload, ProductController.createProduct); // product body
productRoutes.put('/products/:id', authorization, upload, ProductController.updateProduct); // data product
productRoutes.delete('/products/:id', authorization, ProductController.deleteProduct); // id

export default productRoutes;

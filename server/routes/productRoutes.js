import express from 'express';
import { createProductController, getAllProductsController, getProductByIdController, updateProductByIdController, deleteProductByIdController } from '../controllers/productController.js';

const router = express.Router();

// POST route for creating a new product
router.post('/create-product', createProductController);

// GET route for getting all products
router.get('/', getAllProductsController);

// GET route for getting a product by ID
router.get('/:id', getProductByIdController);

// PUT route for updating a product by ID
router.put('/:id', updateProductByIdController);

// DELETE route for deleting a product by ID
router.delete('/:id', deleteProductByIdController);

export default router;

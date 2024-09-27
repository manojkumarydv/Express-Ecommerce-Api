import express from 'express';
import { createOrder, getAllOrders, getOrderById } from '../controllers/orderController.js';

const router = express.Router();

// Create a new order
router.post('/create-orders', createOrder);

// Get all orders
router.get('/get-all-orders', getAllOrders);

// Get order by ID
router.get('/get-single-order/:orderId', getOrderById);

export default router;

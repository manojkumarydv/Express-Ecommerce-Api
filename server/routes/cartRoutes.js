// routes/cartRoutes.js
import express from 'express';
import { addToCart,  increaseQty, decreaseQty, userCartItems , deleteFromCart,deleteAllCartItems, getAllCartItems, } from '../controllers/cartController.js';

const router = express.Router();

router.post('/add-to-cart', addToCart);
router.put('/increaseQty', increaseQty);
router.put('/decreaseQty', decreaseQty);

router.get('/user-cart-items/:userId', userCartItems);

router.delete('/delete-cart-items/:cartItemId', deleteFromCart);
router.delete('/delete-all-cart-items/:cartItemId', deleteAllCartItems);

router.get('/all-cart-items', getAllCartItems);




export default router;

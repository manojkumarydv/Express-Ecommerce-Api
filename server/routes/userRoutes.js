import express from 'express';
import { registerController, loginController } from '../controllers/userController.js';

const router = express.Router();

// POST route for user registration
router.post('/register', registerController);

// POST route for user login
router.post('/login', loginController);

export default router;

import OrderModel from "../models/orderSchema.js";




export const createOrder = async (req, res) => {
    try {
        const { userId,cartItems,totalOrderPrice } = req.body;
        console.log("items data.....",req.body.cartItems)

        // Create new order instance
        const order = new OrderModel({
            user:userId,
            orderCartItems:cartItems,
            totalOrderPrice
        });

        console.log("order....",order)

        // Save the order to the database
        await order.save();

        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Get  orders of single user


// Get all orders
export const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find().populate('user').populate('items');
        res.status(200).json({ orders });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get order by ID
export const getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await OrderModel.findById(orderId).populate('user').populate('items');
        
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ order });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({

    orderCartItems: [{

        productId: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        qty: {
            type: Number,
            // default:1
        },

    }],


    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },


    // totalOrderQty: {
    //     type: Number,
    //     // required: true
    // },


    totalOrderPrice: {
        type: Number,
        // default:0
    },


    // status: {
    //     type: String,
    //     enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered'],
    //     default: 'Pending'
    // },

    // orderDate: {
    //     type: Date,
    //     default: Date.now
    // }

},{ timestamps: true });

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;



/**
Order Example:

{
    "orderItems" : [
        {
            "quantity": 3,
            "product" : "5fcfc406ae79b0a6a90d2585"
        },
        {
            "quantity": 2,
            "product" : "5fd293c7d3abe7295b1403c4"
        }
    ],
    "shippingAddress1" : "Flowers Street , 45",
    "shippingAddress2" : "1-B",
    "city": "Prague",
    "zip": "00000",
    "country": "Czech Republic",
    "phone": "+420702241333",
    "user": "5fd51bc7e39ba856244a3b44"
}

 */
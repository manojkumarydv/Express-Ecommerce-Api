import mongoose from 'mongoose';


// cart item schema
// const cartItemSchema = new mongoose.Schema({

//     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     name: { type: String },
//     price: { type: Number },
//     quantity: { type: Number , default:1 },

// })


// cart schema
const cartSchema = new mongoose.Schema({

    userId: { 
        type: String,
        // type: mongoose.Schema.Types.ObjectId, 
        // ref: 'User', 
        required: true 
    },

    
    cartItems: [{ 

        productId: {
            type: String,
            // type: mongoose.Schema.Types.ObjectId,
            // ref: "Product",
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

        totalQtyPrice: {
            type: Number,
            // default:0
        },

    }],

    totalOrderQty: {
        type: Number,
        default:0
    },

    totalOrderPrice: {
        type: Number,
        default:0
    },

    
}, {timestamps:true} );

cartSchema.pre('save', function(next){
    const cart = this;
    cart.totalOrderQty = cart.cartItems.reduce((acc,item) => acc + item.qty,0);
    cart.totalOrderPrice = cart.cartItems.reduce((acc,item) => acc + item.totalQtyPrice,0);
    next()
})



// model
const CartModel = mongoose.model('Cart', cartSchema);

export default CartModel;





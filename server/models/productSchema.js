import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the schema for the Product model
const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },

    // stock: {
    //     type: Number,
    //     required: true,
    //     min: 0
    // },

    // category: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: "Category" 
    // },

    // productImage: {
    //     type: String,
    //     default: "",
    //   },


},{ timestamps: true });

// Create the Product model from the schema
const ProductModel = model('Product', productSchema);

export default ProductModel;

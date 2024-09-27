import CartModel from "../models/cartSchema.js";

// item
// qty
// pricce
// total prce
// remove

// cart items.... {
//     productItems: [ { product: '65cc5531b73a65b4c33a4334', name: 'a', price: 10 } ]
//   }

// cart items.... [ { product: '65cc5531b73a65b4c33a4334', name: 'a', price: 10 } ]



export const addToCart = async (req, res) => {
    
    try {
        
        const { userId,productId,name,price } = req.body;
        console.log("cart items....",req.body)
        

        let cart = await CartModel.findOne({userId})
        console.log("ext..",cart)

        if(!cart){
            cart = new CartModel({ userId , cartItems:[] });
        }

        let itemIndex = cart.cartItems.findIndex(item => item.productId === productId);

        if(itemIndex !== -1){
            cart.cartItems[itemIndex].qty+=1
            cart.cartItems[itemIndex].totalQtyPrice = cart.cartItems[itemIndex].qty*price
        }else{
            cart.cartItems.push({
               
                productId,
                name,
                price,
                qty:1,
                totalQtyPrice:price
            })
        }


        cart.totalOrderQty = cart.cartItems.reduce((acc,item) => acc + item.qty,0);
        cart.totalOrderPrice = cart.cartItems.reduce((acc,item) => acc + item.totalQtyPrice,0);

        const result= await cart.save()
        console.log("saved cart...",result)
        res.send({ status: "success", message: "created successfully", result })

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};




export const increaseQty = async (req, res) => {
    
    try {
        
        const { productId , price } = req.body;
        console.log("cart items....",req.body)
        

        let cart = await CartModel.findOne()
        console.log("ext..",cart)

        if(!cart){
            // cart = new CartModel({ userId , cartItems:[] });
            return res.status(404).json({message:'cart not found'})
        }

        let itemIndex = cart.cartItems.findIndex(item => item.productId === productId);

        if(itemIndex !== -1){
            cart.cartItems[itemIndex].qty+=1
            cart.cartItems[itemIndex].totalQtyPrice = cart.cartItems[itemIndex].qty*price
            await cart.save()
            return res.json(cart)
        }
        res.send({ status: "success", message: "product not found in cart" })

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};




export const decreaseQty = async (req, res) => {
    
    try {
        
        const { productId , price } = req.body;
        console.log("cart items....",req.body)
        

        let cart = await CartModel.findOne()
        console.log("ext..",cart)

        if(!cart){
            // cart = new CartModel({ userId , cartItems:[] });
            return res.status(404).json({message:'cart not found'})
        }

        let itemIndex = cart.cartItems.findIndex(item => item.productId === productId);

        if(itemIndex !== -1){
            if(cart.cartItems[itemIndex].qty>1){
                cart.cartItems[itemIndex].qty-=1;
                cart.cartItems[itemIndex].totalQtyPrice = cart.cartItems[itemIndex].qty*price
                await cart.save()
                return res.json(cart)
            }
            
            res.send({ status: "success", message: "qty cant be ess than 1" })
        }

        res.send({ status: "success", message: "product not found in cart" })


    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};




export const userCartItems = async (req, res) => {
    try {

        const {userId} = req.params
        console.log("userIdd...",userId)
      
        const cartItems = await CartModel.findOne({userId})
        console.log("cart items....",cartItems)
        console.log("cart items qty....",cartItems.qty)
        // console.log("cart items qty length....",cartItems.qty.length)

        // Calculate total price of all items in the cart
        // totalOrderQtyInCart and totalOrderPriceInCart 
        let totalOrderPriceInCart  = 0;
        for (const cartItem in cartItems) {
            totalOrderPriceInCart  = totalOrderPriceInCart  +  cartItem. totalOrderQtyInCart;
        }

        console.log("aa........",totalOrderPriceInCart )
    
        res.status(200).json({ success: true, message: "all cart items", cartItems , totalOrderQtyInCart:cartItems.qty.length });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};





export const deleteFromCart = async (req, res) => {
    const { cartItemId } = req.params;
    console.log("cart item id...",cartItemId)

    try {
        const cartItem = await CartModel.findByIdAndDelete(cartItemId);
        console.log("removed item...",cartItem)
        if (!cartItem) {
            return res.status(404).json({ message: 'CartItem not found' });
        }
        res.status(200).json({ message: 'CartItem removed from cart',cartItem });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};




export const deleteAllCartItems = async (req, res) => {
    const { cartItemId } = req.params;
    console.log("cart item id...",cartItemId)

    try {
        const cartItem = await CartModel.findByIdAndDelete(cartItemId);
        console.log("removed al cart item...",cartItem)
        if (!cartItem) {
            return res.status(404).json({ message: 'CartItems not found' });
        }
        res.status(200).json({ message: 'CartItems removed from cart',cartItem });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};




export const getAllCartItems = async (req, res) => {
    try {

        // Find all cart items
        // const cartItems = await CartModel.find().populate('productId')
        const cartItems = await CartModel.find().sort({'createdAt': -1});
        console.log("cart items....",cartItems)

        // Calculate total price of all items in the cart
        let allPriceInCart = 0;
        for (const cartItem of cartItems) {
            allPriceInCart = allPriceInCart +  cartItem.price;
        }

        console.log("aa",allPriceInCart)
    
        res.status(200).json({ success: true, message: "all cart items", cartItems ,allItemsInCart:cartItems.length, allPriceInCart });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};





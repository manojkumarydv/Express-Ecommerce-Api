import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
import connectDB from './config/connectDb.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import cors from 'cors';


// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
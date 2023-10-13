import express from "express"
import * as dotenv from 'dotenv'
import connectDB from "./database.js"
import productRouter from "./routes/product.js"
import categoryRouter from "./routes/categories.js"
import brandRouter from "./routes/brand.js"
// Khai báo 1 middleware

dotenv.config()
const app = express()
app.use(express.json())

// Routes: Root Route
app.use('/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/brands', brandRouter);

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    connectDB()
    console.log(`Server is running on port ${port}`);
})
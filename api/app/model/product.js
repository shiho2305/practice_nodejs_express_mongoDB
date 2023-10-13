import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id: {
            type: Number,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        discountPercentage: {
            type: Number,
        },
        rating: {
            type: Number,
        },
        stock : {
            type: Number,
        },
        brand: {
            type: Number,
        },
        category: {
            type: Number,
        },  
    }
);

let Product = mongoose.model("products", ProductSchema);

export default Product;
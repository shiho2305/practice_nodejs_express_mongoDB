import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id: {
            type: Number,
        },
        name: {
            type: String,
        }, 
    }
);
let Category = mongoose.model("categories", CategorySchema);

export default Category;
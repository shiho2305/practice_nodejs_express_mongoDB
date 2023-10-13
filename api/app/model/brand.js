import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
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
let Brand = mongoose.model("categories", BrandSchema);

export default Brand;
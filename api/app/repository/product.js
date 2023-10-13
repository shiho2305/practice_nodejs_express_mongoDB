import Product from "../model/product.js";

const productRepository = {
    findAll: async () => {
        return await Product.find();
    },
    findById: async (id) => {
        return await Product.findOne({id: id});
    },
    deleteById: async (id) => {
        const a = await Product.deleteOne({id: id});
        return a
    },
};

export default productRepository;
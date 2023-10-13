import productRepository from "../repository/product.js";

const productController = {
    getAll: async (req, res) => {
        try {
            const products = await productRepository.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json("bad request")
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await productRepository.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(404).json("bad request")
        }

    },
    deleteById: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await productRepository.deleteById(id);
            res.json(product);
        } catch (error) {
            res.status(404).json("bad request")
        }
    }
};
export default productController;
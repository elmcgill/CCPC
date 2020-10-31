const Product = require("../models/productModel");
const PRODUCT_KEYS = ['title','price', 'cpu', 'motherboard', 'memory', 'storage', 'case', 'psu', 'class'];

/*
* Get all the products stored in the database
*/
module.exports.all = async (req, res) => {
    try{
        const productList = await Product.find();
        res.status(200).json({
            message: `${productList.length} products have been retrieved!`,
            data: productList
        });
    }
    catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

/*
* Get a specific product by its id
*/
module.exports.get = async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        if(product){
            res.status(200).json({
                message: `Found with product with id: ${id}`,
                data: product
            });
        } else {
            res.status(404).json({
                message: `Product with id ${id} could not be found`
            });
        }
    }
    catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

/*
* Create a new product, and store it in the database
*/
module.exports.new = async (req, res) => {
    //I will have to implement user authorization so only admins can post new products
    //However, we do not have user auth implemented yet... Maybe next time :)

    try{
        if(!PRODUCT_KEYS.every((item) => req.body.hasOwnProperty(item))){
            res.status(400).json({
                message: 'Not all keys were present to create new product. Please include: title, price, cpu, motherboard, memory, storage, case, psu, and class'
            });
        } else {
            const data = req.body;

            const newProduct = await new Product(data);
            const savedProduct = await newProduct.save();

            res.status(200).json({
                message: 'Product created successfully',
                data: {
                    id: savedProduct._id
                }
            });
        }
    }
    catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

/*
* Delete a product from the database
*/
module.exports.remove = async (req, res) => {

    //I will have to implement user authorization so only admins can delete products
    //However, we do not have user auth implemented yet... Maybe next time :)

    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        if(!product){
            res.status(400).json({
                message: `Could not delete product because no product with id: ${id} found`
            });
        }
        else{
            await product.deleteOne();
            res.status(200).json({
                message: `Product with id: ${id} has been deleted`
            });
        }
    }
    catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

module.exports.update = async (req, res) => {
    //I will have to implement user authorization so only admins can update products
    //However, we do not have user auth implemented yet... Maybe next time :)

    try{
        const id = req.params.id;
        let product = await Product.findById(id);
        if(!product){
            res.status(400).json({
                message: `Could not find a product to update with id: ${id}`
            });
        }
        else{
            if(req.body.constructor === Object && Object.keys(req.body).length === 0){
                res.status(400).json({
                message: `Could not update the product, because no information was provided`
                });
            }
            else {
                await product.update(req.body);
                res.status(200).json({
                    message: `Product with id: ${id} has been updated`,
                    data:{
                        id: id
                    }
                });
            }
        }
    }
    catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}
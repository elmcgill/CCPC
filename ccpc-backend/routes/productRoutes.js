const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//get all products
router.get("/", async (req, res) => {
    await productController.all(req, res);
});

//get a product by id
router.get("/:id", async (req, res) => {
    await productController.get(req, res);
})

//post a new product
router.post("/new", async (req, res) => {
    await productController.new(req, res);
})

//delete a product
router.delete("/delete/:id", async (req, res) => {
    await productController.remove(req, res);
})

//update a product
router.put("/update/:id", async (req, res) => {
    await productController.update(req, res);
})

module.exports = router;
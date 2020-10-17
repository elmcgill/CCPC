const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    price: {
        type: Number,
        required: "Product Price is required"
    },
    cpu:{
        type: String,
        required: "Product must have a cpu"
    },
    cpu_cooler: {
        type: String,
        required: false,
        default: null
    },
    motherboard: {
        type: String,
        required: "Product must contain a motherboard"
    },
    memory: {
        type: String,
        required: "Product must contain memory"
    },
    storage:[
        {
            type: String,
            required: "Product must have at least one SSD or HDD"
        }
    ],
    gpu: {
        type: String,
        required: false,
        default: null
    },
    case: {
        type: String,
        required: "Product must have a case"
    },
    psu: {
        type: String,
        required: "Product must have a power supply"
    }
});

module.exports = mongoose.model("Product", ProductSchema);
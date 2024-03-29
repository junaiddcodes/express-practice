const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    title: String,
    tags: [String],
    price: Number,
    slug: {
        type: String, 
        lowercase: true,    
    },
})
const ProductModel = mongoose.model("products",productSchema)
module.exports = ProductModel   
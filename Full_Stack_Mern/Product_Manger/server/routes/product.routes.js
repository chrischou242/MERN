const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.models");

module.exports=(app)=>{
    app.post('/api/product', ProductController.create);
    app.get('/api/product', ProductController.viewAllProducts);
    app.get('/api/product/:id', ProductController.ViewSingleProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.DeleteProduct);
};





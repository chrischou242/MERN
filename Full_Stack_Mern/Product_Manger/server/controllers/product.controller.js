const Product = require("../models/product.models");

module.exports ={
    create: function (req, res){
        Product.create(req.body)
        .then((Product)=>{
            res.json({Product : Product})
        })
        .catch((err)=> {
            res.status(400).json({message: "Try again", err: err})
        })
    },

    viewAllProducts: function(req,res){
        Product.find({})
        .then((Products)=>{
            res.json(Products)
        })
        .catch((err)=>{
            res.json({message: "Try again" , err: err});
        });
    },

    ViewSingleProduct: function(req, res){
        Product.findOne({_id : req.params.id})
        .then((SingleProduct)=>{
            if (SingleProduct){
                res.json(SingleProduct);
            }
            else{
                throw new Error("Cant find joke"); 
            }
        })
        .catch((err)=>{
            res.status(404).json({message:"Could not find product" , err: err});
        });
    },

    updateProduct : function(req,res){
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} )
        .then((updateProduct)=>{
            res.json({updateProduct})
        })
        .catch((err)=>{
            res.json({message:"Could not find product", err:err})
        });
    },

    DeleteProduct : function(req,res){
        Product.deleteOne({_id: req.params.id} )
        .then((deleteProduct)=>{
            res.json({deleteProduct})
        })
        .catch((err)=>{
            res.json({message:"Could not find product", err:err})
        });
    },
    
}



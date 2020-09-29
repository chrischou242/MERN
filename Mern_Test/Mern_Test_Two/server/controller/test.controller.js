const Test = require("../models/test.model");

module.exports ={
    create: function (req, res){
        Test.create(req.body)
        .then((Test)=>{
            res.json({Test : Test})
        })
        .catch((err)=> {
            res.status(400).json({message: "Try again", err: err})
        })
    },

    viewAllTests: function(req,res){
        Test.find({})
        .then((Tests)=>{
            res.json(Tests)
        })
        .catch((err)=>{
            res.json({message: "Try again" , err: err});
        });
    },

    ViewSingleTest: function(req, res){
        Test.findOne({_id : req.params.id})
        .then((SingleTest)=>{
            if (SingleTest){
                res.json(SingleTest);
            }
            else{
                throw new Error("Cant find Test"); 
            }
        })
        .catch((err)=>{
            res.status(404).json({message:"Could not find test" , err: err});
        });
    },

    updateTest : function(req,res){
        Test.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} )
        .then((updateTest)=>{
            res.json({updateTest})
        })
        .catch((err)=>{
            res.json({message:"Could not find test", err:err})
        });
    },

    DeleteTest : function(req,res){
        Test.deleteOne({_id: req.params.id} )
        .then((deleteTest)=>{
            res.json({deleteTest})
        })
        .catch((err)=>{
            res.json({message:"Could not find test", err:err})
        });
    },
    
}



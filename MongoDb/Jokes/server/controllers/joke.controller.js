const Joke = require("../models/joke.model");


module.exports ={
    create: function (req, res){
        Joke.create(req.body)
        .then((Joke)=>{
            res.json({joke: Joke});
        })
        .catch((err)=>{
            res.json({message: "Try again" , err: err});
        });
    },

    ViewAllJokes: function(req,res){
        Joke.find({})
        .then((Jokes)=>{
            res.json({joke: Jokes})
        })
        .catch((err)=>{
            res.json({message: "Try again" , err: err});
        });
    },

    ViewSingleJoke: function(req, res){
        Joke.findOne({_id : req.params.id})
        .then((SingleJoke)=>{
            if (SingleJoke){
                res.json({joke: SingleJoke})
            }
            throw new Error("Cant find joke") 
        })
        .catch((err)=>{
            res.json({message:"Could not find joke" , err: err})
        });
    },

    UpdateSingleJoke : function(req,res){
        Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} )
        .then((updateJoke)=>{
            res.json({joke :updateJoke})
        })
        .catch((err)=>{
            res.json({message:"Could not find joke", err:err})
        });
    },

    DeleteJoke : function(req,res){
        Joke.deleteOne({_id: req.params.id} )
        .then((deleteJoke)=>{
            res.json({joke :deleteJoke})
        })
        .catch((err)=>{
            res.json({message:"Could not find joke", err:err})
        });
    },
};
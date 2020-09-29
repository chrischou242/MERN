const mongoose = require("mongoose")


    mongoose.connect("mongodb://localhost/Jokes",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    })
    .then(()=>{
        console.log("Successfully connect to Jokes")
    })
    .catch((err)=>{
        console.log(`mongoose connection to jokes failed`)
    });


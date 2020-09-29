const mongoose = require("mongoose")


    mongoose.connect("mongodb://localhost/Products",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    })
    .then(()=>{
        console.log("Successfully connect to Products")
    })
    .catch((err)=>{
        console.log(`mongoose connection to Products failed`)
    });


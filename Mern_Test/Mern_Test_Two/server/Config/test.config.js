const mongoose = require("mongoose")


    mongoose.connect("mongodb://localhost/BeltTest",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    })
    .then(()=>{
        console.log("Successfully connect to BeltTest")
    })
    .catch((err)=>{
        console.log(`mongoose connection to BeltTest failed`)
    });


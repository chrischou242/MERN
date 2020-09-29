const express = require('express');
const cors = require('cors');
const app = express();
const ProductRoute = require("./server/routes/product.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

ProductRoute(app);
require("./server/config/product.config");


app.listen(8000,()=>{
    console.log("you are listening at port 8000");
})
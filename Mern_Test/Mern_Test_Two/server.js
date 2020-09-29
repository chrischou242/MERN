const express = require('express');
const cors = require('cors');
const app = express();
const TestRoute = require("./server/routes/test.routes");
const port =8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

TestRoute(app);
require("./server/config/test.config");


app.listen(port,()=>{
    console.log("you are listening at port 8000");
})
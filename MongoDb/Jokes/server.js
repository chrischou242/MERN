const express = require("express");
const cors = require("cors");
const port =8000;
const JokeRoute = require("./server/routes/joke.routes");


require("./server/config/mongoose.config");

const app =express();

app.use(express.json());

JokeRoute(app);

app.listen(port,()=>
    console.log( `Listening on port ${port} for REQuests to RESpond to.`)
);
const jokeController = require("../controllers/joke.controller");


module.exports=(app)=>{
    app.post("/api/jokes", jokeController.create);
    app.get("/api/jokes", jokeController.ViewAllJokes);
    app.get("/api/jokes/:id", jokeController.ViewSingleJoke);
    app.put("/api/jokes/:id",jokeController.UpdateSingleJoke);
    app.delete("/api/jokes/:id", jokeController.DeleteJoke);
};
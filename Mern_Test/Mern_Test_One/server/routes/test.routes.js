const TestController = require("../controller/test.controller");


module.exports=(app)=>{
    app.post('/api/test', TestController.create);
    app.get('/api/test', TestController.viewAllTests);
    app.get('/api/test/:id', TestController.ViewSingleTest);
    app.put('/api/test/:id', TestController.updateTest);
    app.delete('/api/test/:id', TestController.DeleteTest);
};



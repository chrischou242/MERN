const port = 8000;
const express = require("express");

const faker = require("faker");

const app =express();
console.log(express);
app.use(express.json());

class User {
    constructor(){
        this.id= faker.random.number();
        this.firstName= faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this.id= faker.random.number();
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.city=faker.address.city();
        this.state=faker.address.state();
        this.zipCode=faker.address.zipCode();
        this.country= faker.address.country();
    }
}




app.get("/", (req,res)=> {
    res.json({hello: "world"})
})

app.get("/api/users/new", (req,res)=>{
    res.json({

        users:[new User(),new User()] 
   
    });
});

app.get("/api/company/new", (req,res)=>{
    res.json({

        company:[new Company(),new Company()] 
   
    });
});

app.get("/api/user/company", (req,res)=>{
    res.json({
        users: new User(),
        company: new Company()
        
    });
});


app.listen(port,()=>{
    console.log(`listening on port ${port} for REQuests to RESpond to.`)
})
const express = require("express");
const app = express();
const port = 8000;
const faker = require('faker');



class User {
    constructor () {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const newUser = new User();
console.log(newUser);

class Address {
    constructor (){
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
const newAddress = new Address();
class Company {
    constructor () {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = faker.newAddress;
    }
}
const newCompany = new Company();
console.log(newCompany);

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// app.get("/api/:users/:new", (req, res) => {
    
//     res.json( user[req.params.new] );
// });

app.get("/api/:users/:new", (req, res) => {
    if(req.params.users === "users"){
        res.json(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`);
    }
    if(req.params.users === "companies"){
        res.json(`Company name: ${newCompany.name}`);
    }
    if(req.params.users === "user" && req.params.new === "company"){
        res.json(`User First Name: ${newUser.firstName}; Company name: ${newCompany.name}`);
    }
    
    });

    
// app.get("/api/:users/:new", (req, res) => {
//     res.json (newUser[req.params.firstName])
//     console.log(newUser)
// });


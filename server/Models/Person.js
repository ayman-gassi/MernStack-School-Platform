const {model, Schema} = require("mongoose");
const person = new Schema({
    FirstName: String,
    LastName: String,
    Email: {
        type : String,
        unique : true
    },
    Gender: {
        type: String,
        enum: ['Male','Female']
    },
    Job:{
        type: String,
        enum:['Student','Teacher'],
        default:'Student'
    },
    Password: String
});

const Person = model('person', person);

module.exports = {Person}
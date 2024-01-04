const { Schema , model } = require("mongoose");

const response = new Schema({
    Text:{
        type : String ,
        required : true
    },
    IsCorrect:{
        type:Boolean,
        required:true,
    },
});
const question = new Schema({
    Text:{
        type : String ,
        required : true
    },
    Responses:[response],
});
const questions = new Schema({
    Name: String ,
    Questions:[question],
});


const Question = model('questions',questions);

module.exports = {Question};
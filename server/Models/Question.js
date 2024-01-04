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
    Duree : {
        type: Number,
        default: 30
    },
    Questions:[question],
});


const Question = model('questions',questions);

module.exports = {Question};
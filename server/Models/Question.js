const { Schema , model } = require("mongoose");

const response = new Schema({
    text:{
        type : String ,
        required : true
    },
    isCorrect:{
        type:Boolean,
        required:true,
    },
});
const question = new Schema({
    idExam: Number ,
    text:{
        type : String ,
        required : true
    },
    responses:[response],
});

const Question = model('question',question);

module.exports = {Question};
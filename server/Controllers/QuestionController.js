const {Question} = require("../Models/Question");

async function getAllQuestions(name) {
    try{
        let result = await Question.findOne({ Name: name});
        return result ;
    }
    catch(e){
        console.log(" QC Error "+e)
    }
    
}

module.exports={getAllQuestions};
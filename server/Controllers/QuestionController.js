const {Question} = require("../Models/Question");

async function getAllQuestions(name) {
    try{
        let result = await Question.findOne({ Name: name});
        console.log(result);
        return result ;
    }
    catch(e){
        console.log(" QC Error "+e)
    }
    
}

module.exports={getAllQuestions};
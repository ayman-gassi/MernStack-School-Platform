const {Question} = require("../Models/Question");

async function getAllQuestions() {
    try{
        let result = await Question.find();
        return result ;
    }
    catch(e){
        console.log(" QC Error "+e)
    }
    
}

module.exports={getAllQuestions};
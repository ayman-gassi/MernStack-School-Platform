const {Exam} = require("../Models/Exam");
async function getExam(name){
    try{
        const result = await Exam.findOne({Name : name})
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}
module.exports = {getExam}
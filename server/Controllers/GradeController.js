const {Grade} = require("../Models/Grade");
async function addGrade(ExamName,StudentName,note){
    try{
        const newGrade = new Grade({
            StudentName: StudentName,
            ExamName :ExamName,
            grade: note
        });
        const result = await Grade.insertMany(newGrade);
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}
async function getGrades(name){
    try{
        const result = await Grade.find({ StudentName : name});
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}
module.exports = {addGrade,getGrades}
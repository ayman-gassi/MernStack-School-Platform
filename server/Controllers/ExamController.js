const {Exam} = require("../Models/Exam");
const {Question} = require("../Models/Question");
const {Field} = require("../Models/Field");

async function getExam(name){
    try{
        const result = await Exam.findOne({Name : name})
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}
async function deleteExam(body){
    try{
        await Question.findOneAndDelete({Name : body.Exam})
        await Exam.findOneAndDelete({Name : body.Exam})
        const currentField = await Field.findOne({Name: body.Field})
        await Field.findOneAndUpdate({Name: body.Field},{Enbr : currentField.Enbr -1 })
    }catch(e){
        console.log(e);
        throw e ;
    }
}
async function createExam(body){
    try{
        const currentField = await Field.findOne({Name : body.FieldName});
        await Field.findOneAndUpdate({Name : currentField.Name},{Enbr: currentField.Enbr+1});
        const newExam = new Exam({
          Name: body.ExamName,
          FieldName : body.FieldName,
          PicSrc: null,
          Desc : body.ExamDesc,
          Teacher : body.Teacher,
          Qnbr: body.Questions.length,
        })
        const res = await newExam.save();
        const newQuestion = new Question({
            Name: res.Name,
            Duree : body.ExamDuree,
            Questions: body.Questions,
        })
        const result = await newQuestion.save();
        return result ;
        
    }catch(e){
        console.log(e);
        throw e ;
    }
}
module.exports = {getExam , createExam ,deleteExam}
const {Field} = require("../Models/Field");
const {Exam} = require("../Models/Exam");
async function getAllFields(){
    try{
        const result = await Field.find();
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}
async function getAllFieldsByTeacher(Name){
    try{
        const result = await Exam.find({Teacher : Name});
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}
async function getField(name){
    try{
        const field = await Field.findOne({Name : name});
        const exam = await Exam.find({FieldName : field.Name})
        const result = {Field : field , Exam : exam}
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}
module.exports = {getAllFields,getField,getAllFieldsByTeacher}
const {Person} = require("../Models/Person");

async function getStudentbyEmail(email,job='Student'){
    try{
        const result = await Person.findOne({Email: email , Job: job});
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}

async function getStudentbyEmail_Password(email, password) {
    try {
        const result = await Person.findOne({ Email: email, Password: password});
        return result;
    } catch (e) {
        console.error("Error during getStudentbyEmail_Password:", e);
        throw e;
    }
}


async function addStudent(Fname , Lname , email ,gender , password , job='Student'){
    try{
        const result = new Person({ FirstName:Fname , LastName:Lname , Email:email , Gender:gender ,Password:password , Job:job });
        result.save();
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}

async function getTeacherbyEmail(email, job='Teacher'){
    try{
        const result = await Person.findOne({Email: email , Job : job});
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}

async function getTeacherbyEmail_Password(email , password, job='Teacher'){
    try{
        const result = await Person.findOne({Email:email , Password:password , Job:job});
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}

async function addTeacher(Fname , Lname , email , password , gender , job='Teacher'){
    try{
        const result = new Person({ FirstName:Fname , LastName:Lname , Email:email , Password:password , Gender:gender , Job:job });
        result.save();
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}



module.exports = {getStudentbyEmail , getStudentbyEmail_Password , addStudent , getTeacherbyEmail , getTeacherbyEmail_Password , addTeacher} 
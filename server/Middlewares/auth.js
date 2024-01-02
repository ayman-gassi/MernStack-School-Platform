const {getStudentbyEmail , getStudentbyEmail_Password , addStudent} = require("../Controllers/UserController");

async function Login(email , password){
    try{
        const result = await getStudentbyEmail_Password(email , password);
        return result ; 
    }catch(e){
        console.log(e);
        throw e ;
    }
} 
async function Register(Fname,Lname,email,gender,password){
    try {
        const result = await addStudent(Fname,Lname,email,gender,password)
        return result;
    } catch (e) {
        console.log(e);
        throw e; 
    }
}
module.exports = {Login , Register};
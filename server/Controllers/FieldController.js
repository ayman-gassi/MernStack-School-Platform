const {Field} = require("../Models/Field");
async function getAllFields(){
    try{
        const result = await Field.find();
        return result ;
    }catch(e){
        console.log(e);
        throw e ;
    }
}
module.exports = {getAllFields}
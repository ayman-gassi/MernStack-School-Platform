const {model, Schema} = require("mongoose");
const grade = new Schema({
          StudentName: String,
          ExamName :String,
          grade: String
});
const Grade = model('grade', grade);

module.exports = {Grade}    
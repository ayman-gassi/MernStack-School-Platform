const {model, Schema} = require("mongoose");
const exam = new Schema({
          name: String,
          FieldName :String,
          PicSrc: String,
          Desc : String,
          Teacher : String,
          Qnbr: Number
});
const Exam = model('exam', exam);

module.exports = {Exam}
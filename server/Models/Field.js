const {model, Schema} = require("mongoose");
const field = new Schema({
    Name: String,
    PicSrc: String,
    Enbr: Number,
    "items": [
        {
          "name": String,
          "Desc" : String ,
          "Teacher" : String,
          "Qnbr": Number
        },
      ]
});
const Field = model('field', field);

module.exports = {Field}
const {model, Schema} = require("mongoose");
const field = new Schema({
    Name: String,
    PicSrc: String,
    Enbr: Number,
    Desc : String
});
const Field = model('field', field);

module.exports = {Field}
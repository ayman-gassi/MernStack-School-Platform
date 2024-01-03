const {model, Schema} = require("mongoose");
const field = new Schema({
    Name: String,
    PicSrc: String,
    Qnbr: Number
});
const Field = model('field', field);

module.exports = {Field}
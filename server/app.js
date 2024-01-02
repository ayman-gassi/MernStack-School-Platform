const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const path = require('path');
const userRoute = require("./Routes/UserRoute");
const session = require("express-session")
const bodyParser = require('body-parser');
const app = express();

app.use(session({
    secret : "un secret",
    resave : false,
    saveUninitialized : true,
    //cookie : {maxAge : 20000}
}))
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://0.0.0.0:27017/SchoolWebsite');
const db = mongoose.connection ;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');

    // app.get("/", (req, res) => {
    //     res.sendFile(path.join(__dirname, 'file.html'));
    // });
    app.use("/api", userRoute);

});



app.listen(3000);
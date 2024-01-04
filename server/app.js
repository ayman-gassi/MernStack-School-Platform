const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./Routes/UserRoute");
const bodyParser = require('body-parser');
const app = express();
const session = require("express-session")
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));
app.use(session({
    secret : "un secret",
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge : 20000}
}));
mongoose.connect('mongodb://0.0.0.0:27017/SchoolWebsite');
const db = mongoose.connection ;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
    app.use("/api", userRoute);
}); 
app.listen(3000);
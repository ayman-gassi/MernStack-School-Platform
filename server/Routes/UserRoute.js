const { getStudentbyEmail } = require("../Controllers/UserController");
const { Login , Register } = require("../Middlewares/auth");
const {getAllFields,getField} = require('../Controllers/FieldController')
const {getExam} = require('../Controllers/ExamController')
const {getAllQuestions} = require('../Controllers/QuestionController')
const {addGrade,getGrades} = require('../Controllers/GradeController')
const router = require("express").Router();
let User = null ;

router.post('/Connection', async (req, res) => {
        if(User === null){
            res.send({Exist : true})
        }
        else{
            res.send({Entity : User.Job , Exist : false})
        }
});
router.get('/getAllFields', async (req, res) => {
    try {
        let result = await getAllFields();
        if (result) {
            res.send(result);
        } else {    
            console.log('no fields');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
router.get('/getField/:name', async (req, res) => {
    console.log("calling getField")
    try {
        let result = await getField(req.params.name);
        if (result) {
            res.send(result);
        } else {
            console.log('no field');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
router.get('/getExam/:name', async (req, res) => {
    console.log("calling getExam")
    try {
        let result = await getExam(req.params.name);
        if (result) {
            res.send(result);
        } else {
            console.log('no Exam');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Attempting login with email:', email);
        let result = await Login(email, password);
        if (result) {   
            req.session.user = result;
            User = result;
            res.send( {Entity : User.Job , Exist : true});
            console.log("LOGIN SUCCESSFULLY");
        } else {
            console.log('Invalid credentials');
            res.send( {Exist : false});
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
});
router.post("/Register",async(req,res)=>{
    try{
        let reqi = await getStudentbyEmail(req.body.email);
        if(reqi){
            res.send( {Exist : false});
            console.log(" EMAIL ALREADY EXIST ")
        }
        else{
            let result = await Register(req.body.firstName, req.body.lastName,req.body.email , req.body.gender,req.body.password);
            if(result){
                req.session.user = result ; 
                User = result;
                console.log("REGISTER SUCCESSFULLY")
                res.send( {Entity : User.Job , Exist : true});
            }
        }
    }catch (error) {
        console.error("Error during Register:", error);
        res.status(500).send("Internal Server Error");
    }

  
})

router.post('/userinfo', (req, res) => {
    console.log("Current user : "+User.FirstName)
    res.send(User)
});

router.post("/start/:name",async(req,res)=>{
    const name = req.params.name;
    console.log("calling start")
    try{
        let result = await getAllQuestions(name);
        if(result){
            res.send(result);
        }
    }catch(error){
        console.log("ERROR"+error);
    }
});
router.post('/saveGrade/:Exam/:Grade/:Qnbr', async (req, res) => {
    console.log(req.params.Exam + "  " + req.params.Grade)
    try {
        let result = await addGrade(req.params.Exam,User.Email,req.params.Grade + '/' + req.params.Qnbr );
        if (result) {
            res.send(true);
        } else {
            res.send(false);
            console.log('no field');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
router.get('/getGrade', async (req, res) => {
    console.log("calling getGrade")
    try {
        let result = await getGrades(User.Email);
        if (result) {
            res.send(result);
        } else {
            console.log('no grades');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
router.get("/logout",(req,res)=>{
    console.log("calling logout")
        User = null ;
        if(User === null){
            res.send(true)
        }
})


module.exports = router;
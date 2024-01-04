const { getStudentbyEmail } = require("../Controllers/UserController");
const { Login , Register } = require("../Middlewares/auth");
const {getAllFields,getField} = require('../Controllers/FieldController')
const {getExam} = require('../Controllers/ExamController')
const router = require("express").Router();
let User = null ;

router.post('/Connection', async (req, res) => {
        if(User === null){
            res.send(true)
        }
        else{
            res.send(false)
        }
});

router.get('/getAllFields', async (req, res) => {
    try {
        let result = await getAllFields();
        if (result) {
            console.log(result)
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
            console.log(result)
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
            console.log(result)
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
            console.log(req.session.user.Email + " Session Saved");
            res.send(true);
            console.log("LOGIN SUCCESSFULLY");
        } else {
            console.log('Invalid credentials');
            res.send(false);
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
            res.send(false);
            console.log(" EMAIL ALREADY EXIST ")
        }
        else{
            let result = await Register(req.body.firstName, req.body.lastName,req.body.email , req.body.gender,req.body.password);
            if(result){
                req.session.user = result ; 
                console.log("REGISTER SUCCESSFULLY")
                res.send(true)
            }
        }
    }catch (error) {
        console.error("Error during Register:", error);
        res.status(500).send("Internal Server Error");
    }

  
})

router.post('/userinfo', (req, res) => {
    console.log(req.session.user)
    res.send(User)
});

router.get("/logout",(req,res)=>{
    console.log("calling logout")
        User = null ;
        if(User === null){
            res.send(true)
        }
})

module.exports = router;
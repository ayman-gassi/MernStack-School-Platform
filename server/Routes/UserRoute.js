const { getStudentbyEmail } = require("../Controllers/UserController");
const { Login , Register } = require("../Middlewares/auth");
const {getAllFields} = require('../Controllers/FieldController')
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
        console.error("Error during login:", error);
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
    if(req.session.std){
        req.session.destroy((err)=>{
            if(err){
                console.error('ERROR DESTROYING SESSION:', err);
                res.status(500).send('Internal Server Error');
            }
            else{
                console.log("DESTROYED SUCCESFULLY");
            }
        })
    }
    else{

    }
})

module.exports = router;
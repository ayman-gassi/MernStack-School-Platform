const { getStudentbyEmail } = require("../Controllers/UserController");
const { Login , Register } = require("../Middlewares/auth");
const router = require("express").Router();
const express = require("express");

router.use(express.static('public'));


router.post('/login', async (req, res) => {
    try {
        console.log('Received login request:', req.body);

        const { email, password } = req.body;
        console.log('Attempting login with email:', email);

        let result = await Login(email, password);

        if (result) {
            console.log('Login successful. User data:', result);
            // Ensure 'result' contains the necessary user information
            req.session.user = result;
            res.json({ success: true, message: "LOGIN SUCCESSFULLY" });
            console.log("LOGIN SUCCESSFULLY");
        } else {
            console.log('Invalid credentials');
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
});



router.post("/Register",async(req,res)=>{
    let reqi = await getStudentbyEmail(req.body.email);
    if(reqi){
        // SOME CONDITIONS 
        console.log(" EMAIL ALREADY EXIST ")
    }
    else{
        let result = await Register(req.body.fname, req.body.lname, req.body.email,req.body.gender,req.body.password);
        if(result){
            req.session.user = {result} ; 
            // SHOW THE HOME PAGE 
            console.log("REGISTER SUCCESSFULLY")
        }
        else{
            // SHOW THE REGISTER PAGE 
        }
    }
})

router.get('/userinfo', (req, res) => {
    console.log(JSON.stringify(req.session.user, null, 2));
    if (req.session.user) {
        res.json({ success: true, user: req.session.user });
        console.log("DATA PASSED SUCCESs")
    } else {
        res.status(401).json({ success: false, message: 'User not logged in' });
        console.log("User not logged in")
    }
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
                // GO TO LOGIN :
            }
        })
    }
    else{
        // GO TO LOGIN 
    }
})

module.exports = router;
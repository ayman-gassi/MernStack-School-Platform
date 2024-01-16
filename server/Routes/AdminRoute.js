const router = require("express").Router();
const { createExam, deleteExam } = require("../Controllers/ExamController");
const {getAllFieldsByTeacher} = require('../Controllers/FieldController')

router.get('/getAllFieldsByTeacher/:Teacher', async (req, res) => {
    try {
        let result = await getAllFieldsByTeacher(req.params.Teacher);
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
router.post('/createExam', async (req, res) => {
    try {
        let result = await createExam(req.body);
        if (result) {
            res.send(true);
        } else {    
            console.log('error');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
router.post('/DeleteExam', async (req, res) => {
    try {
        await deleteExam(req.body);
        res.send(true);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
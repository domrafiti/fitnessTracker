//routes/api.js
const router = require("express").Router();
const Exercise = require("../models/exercise.js");


const collections = ["exercise"];

router.get("/", (req, res) => {
    Exercise.find({})
        .sort({ date: -1 })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//create workout
router.post("/api/workouts", ({ body }, res) => {
    db.exer
})

//update workout
router.post("", ({ body }, res) => {

})
//get last workout
router.get("", ({ body }, res) => {

})
module.exports = router;
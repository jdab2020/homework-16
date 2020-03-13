const db = require("../models")

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(results => {
                res.json(results);
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.put("/api/workouts/:id", (req, res) => {

    })

    app.post("/api/workouts", (req, res) => {

    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(results => {
                res.json(results)
            })
            .catch(err => {
                res.json(err)
            })
    })
}
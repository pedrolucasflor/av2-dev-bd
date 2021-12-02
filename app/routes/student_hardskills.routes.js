module.exports = (() => {
    const studentHardskillsController = require("../controllers/student_hardskills.controller")

    let router = require("express").Router()

    router.post("/:id", async (req, res) => {
        const hardskill = await studentHardskillsController.store(req.body, req.params.id)
        res.json(hardskill)
    })

    router.delete("/:id", async (req, res) => {
        const id = req.params.id
        const studentHardskills = await studentHardskillsController.destroy(req.body, id)
        res.json(studentHardskills)
    })

    return router
})()
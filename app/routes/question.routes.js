module.exports = (() => {
    const questionController = require("../controllers/question.controller")

    let router = require("express").Router()

    router.get("/", async (req, res) => {
      const questions = await questionController.index()
      res.json(questions)
        
    })

    router.get("/:id", async (req, res) => {
        const id = req.params.id
        const question = await questionController.show(id)
        res.json(question)
    })

    router.post("/", async (req, res) => {
        const questions = await questionController.store(req.body)
        res.json(questions)
    })

    router.put("/:id", async (req, res) => {
        const id = req.params.id
        const body = req.body
        const question = await questionController.update(id, body)
        res.json(question)
    })

    router.delete("/:id", async (req, res) => {
        const id = req.params.id
        const question = await questionController.destroy(id)
        res.json(question)
    })

    return router
})()
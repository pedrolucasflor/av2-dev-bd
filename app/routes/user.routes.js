module.exports = (() => {
    const userController = require("../controllers/user.controller")

    let router = require("express").Router()

    router.get("/", async (req, res) => {
      const users = await userController.index()
      res.json(users)
        
    })

    router.get("/:id", async (req, res) => {
        const id = req.params.id
        const user = await userController.show(id)
        res.json(user)
    })

    router.post("/", async (req, res) => {
        const users = await userController.store(req.body)
        res.json(users)
    })

    router.put("/:id", async (req, res) => {
        const id = req.params.id
        const body = req.body
        const user = await userController.update(id, body)
        res.json(user)
    })

    router.delete("/:id", async (req, res) => {
        const id = req.params.id
        const user = await userController.destroy(id)
        res.json(user)
    })

    return router
})()
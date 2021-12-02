const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const db = require("./app/db/models")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.json({
        mensagem: 'grupou api'
    })
})

app.listen(3000, () => {
    console.log('running server')
})

require("./app/routes")(app)

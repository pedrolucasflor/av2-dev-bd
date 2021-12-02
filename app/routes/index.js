const user = require('./user.routes')
const question = require('./question.routes')
const hardskill = require('./hardskill.routes')
const studentHardskills = require('./student_hardskills.routes')

module.exports = app => {
    app.use('/api/user', user)
    app.use('/api/question', question)
    app.use('/api/hardskill', hardskill)
    app.use('/api/student_hardskills', studentHardskills)
}
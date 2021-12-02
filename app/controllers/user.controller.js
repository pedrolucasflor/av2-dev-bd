const models = require('../db/models')



exports.index = async () => {
    const result = await models.user.findAll({ include: ['student'] })
    return result
}


exports.show = async (id) => {
    const result = await models.user.findByPk(id)
    if (!result){
        return { message: "user not found" }
    }
    return result
}


exports.store = async (user) => {
    const result = await models.user.create(user, {
        include: ['student', 'questions']
    })
    return result
}


exports.update = async (id, user) => {
    const result = await models.user.update(user, { where: { id: id } })
    return result
}

exports.destroy = async (id) => {
    const result = await models.user.destroy({ where: { id: id } })
    return result
}
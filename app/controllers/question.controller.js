const models = require('../db/models')

exports.index = async () => {
    const result = await models.question.findAll({ include: ['user'] })
    return result
}


exports.show = async (id) => {
    const result = await models.question.findByPk(id)
    if (!result) {
        return { message: 'question not found' }
    }
    return result
}


exports.store = async (question) => {
    const result = await models.question.create(question)
    return result
}


exports.update = async (id, question) => {
    const result = await models.question.update(question, { where: { id: id } })
    return result
}

exports.destroy = async (id) => {
    const result = await models.question.destroy({ where: { id: id } })
    return result
}
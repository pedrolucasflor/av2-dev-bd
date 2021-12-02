
const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const Task = sequelize.define(name, {
    description: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

Task.associate = (models) => {

    Task.belongsTo(models.student, {
        foreignKey: {
            name: 'student_id'
        },
        as: 'student'
    })

    Task.belongsTo(models.group, {
        foreignKey: {
            name: 'group_id'
        },
        as: 'group'
    })

}


module.exports = Task
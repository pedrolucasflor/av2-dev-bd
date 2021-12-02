
const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const Grupo = sequelize.define(name, {
    nome: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

Grupo.associate = (models) => {

    Grupo.hasMany(models.task, {
        foreignKey: {
            name: 'group_id'
        },
        as: 'tasks'
    })

    Grupo.belongsToMany(models.student, {
        through: 'student_group',
        timestamps: false,
        foreignKey: {
            name: 'student_id'
        },
        as: 'students'
    })

    Grupo.belongsTo(models.class, {
        foreignKey: {
            name: 'class_id'
        },
        as: 'class'
    })

    Grupo.belongsTo(models.class, {
        foreignKey: {
            name: 'evaluation_activity_id'
        },
        as: 'evalutation activity'
    })

}


module.exports = Grupo
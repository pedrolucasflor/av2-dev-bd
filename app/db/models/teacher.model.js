
const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const Teacher = sequelize.define(name, {
    enrollment: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

Teacher.associate = (models) => {
    Teacher.belongsTo(models.user, {
        foreignKey: {
            name: 'user_id'
        },
        as: 'user'
    })

    Teacher.belongsToMany(models.subject, {
        through: 'teacher_subject',
        timestamps: false,
        foreignKey: {
            name: 'teacher_id'
        },
        as: 'subjects'
    })

    Teacher.belongsToMany(models.subject, {
        through: 'teacher_class',
        timestamps: false,
        foreignKey: {
            name: 'teacher_id'
        },
        as: 'class'
    })



}


module.exports = Teacher
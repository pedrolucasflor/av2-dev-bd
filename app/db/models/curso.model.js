
const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const Course = sequelize.define(name, {
    description: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

Course.associate = (models) => {

    Course.belongsTo(models.student, {
        foreignKey: {
            name: 'course_id'
        },
        as: 'course'
    })

    Course.belongsToMany(models.student, {
        through: 'class_course',
        timestamps: false,
        foreignKey: {
            name: 'course_id'
        },
        as: 'class'
    })
}


module.exports = Course
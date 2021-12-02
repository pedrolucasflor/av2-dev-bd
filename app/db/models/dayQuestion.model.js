
const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const DayQuestion = sequelize.define(name, {
    description: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

DayQuestion.associate = (models) => {
    DayQuestion.belongsTo(models.student, {
        foreignKey: {
            name: 'student_id'
        },
        as: 'student'
    })
}


module.exports = DayQuestion

const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const RotationEvaluation = sequelize.define(name, {
    description: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

RotationEvaluation.associate = (models) => {
    RotationEvaluation.belongsTo(models.student, {
        foreignKey: {
            name: 'student_id'
        },
        as: 'student'
    })   

    RotationEvaluation.belongsTo(models.evaluationActivity, {
        foreignKey: {
            name: 'evaluation_activity_id'
        },
        as: 'evalutation activity'
    })   
}


module.exports = RotationEvaluation;
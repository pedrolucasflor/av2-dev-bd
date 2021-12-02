const  { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const EvaluationActivity = sequelize.define(name, {
    description: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },

    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }


}, {
    sequelize,
    tableName: name,
})


EvaluationActivity.associate = models => {

    EvaluationActivity.belongsToMany(models.student, {
        through: 'hardskill_evaluation_activity',
        timestamps: false,
        foreignKey: {
            name: 'evaluation_activity_id'
        },
        as: 'hardskills'
    })

    EvaluationActivity.belongsTo(models.class, {
        foreignKey: {
            name: 'class_id'
        },
        as: 'class'
    })

    EvaluationActivity.hasMany(models.group, {
        foreignKey: {
            name: 'evaluation_activity_id'
        },
        as: 'groups'
    })

    EvaluationActivity.hasMany(models.rotationevaluation, {
        foreignKey: {
            name: 'evaluation_activity_id'
        },
        as: '360evaluation'
    })

}

module.exports = EvaluationActivity
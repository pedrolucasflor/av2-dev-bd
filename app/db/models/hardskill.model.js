const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const Hardskill = sequelize.define(name, {
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


Hardskill.associate = models => {

    Hardskill.belongsToMany(models.student, {
        through: 'student_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'hardskill_id'
        },
        as: 'students'
    })

    Hardskill.belongsToMany(models.student, {
        through: 'subject_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'hardskill_id'
        },
        as: 'subjects'
    })

    Hardskill.belongsToMany(models.student, {
        through: 'class_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'hardskill_id'
        },
        as: 'class'
    })

    Hardskill.belongsToMany(models.student, {
        through: 'hardskill_evaluation_activity',
        timestamps: false,
        foreignKey: {
            name: 'hardskill_id'
        },
        as: 'evalutation activity'
    })

    Hardskill.hasMany(models.question, {
        foreignKey: {
            name: 'hardskill_id'
        },
        as: 'questions'
    })

}

module.exports = Hardskill
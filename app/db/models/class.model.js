const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const Class = sequelize.define(name, {
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


Class.associate = models => {

    Class.belongsTo(models.subject, {
        foreignKey: {
            name: 'class_id'
        },
        as: 'subject'
    })

    Class.belongsToMany(models.student, {
        through: 'teacher_class',
        timestamps: false,
        foreignKey: {
            name: 'class_id'
        },
        as: 'teachers'
    })

    Class.belongsToMany(models.student, {
        through: 'student_class',
        timestamps: false,
        foreignKey: {
            name: 'class_id'
        },
        as: 'students'
    })


    Class.belongsToMany(models.student, {
        through: 'class_hardskills',
        timestamps: false,
        foreignKey: {
            name: 'class_id'
        },
        as: 'hardskills'
    })

    Class.belongsToMany(models.student, {
        through: 'class_course',
        timestamps: false,
        foreignKey: {
            name: 'class_id'
        },
        as: 'courses'
    })

    Class.hasMany(models.evaluationActivity, {
        foreignKey: {
            name: 'class_id'
        },
        as: 'evaluation_activities'
    })

    Class.hasMany(models.group, {
        foreignKey: {
            name: 'class_id'
        },
        as: 'groups'
    })


}

module.exports = Class
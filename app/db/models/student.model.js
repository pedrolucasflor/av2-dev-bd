
const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const Student = sequelize.define(name, {
    enrollment: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

Student.associate = (models) => {
    Student.belongsTo(models.user, {
        foreignKey: {
            name: 'user_id'
        },
        as: 'user'
    })

    Student.hasMany(models.task, {
        foreignKey: {
            name: 'student_id'
        },
        as: 'tasks'
    })

    Student.belongsToMany(models.softskill, {
        through: 'student_softskill',
        timestamps: false,
        foreignKey: {
            name: 'student_id'
        },
        as: 'softskill'
    })

    Student.belongsToMany(models.group, {
        through: 'student_group',
        timestamps: false,
        foreignKey: {
            name: 'student_id'
        },
        as: 'groups'
    })

    Student.hasMany(models.dayQuestion, {
        foreignKey: {
            name: 'student_id'
        },
        as: 'dayQuestions'
    })

    Student.hasMany(models.rotationevaluation, {
        foreignKey: {
            name: 'student_id'
        },
        as: '360evaluation'
    })

    Student.belongsToMany(models.hardskill, {
        through: 'student_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'student_id'
        },
        as: 'hardskills'
    })

    Student.hasOne(models.course, {
        foreignKey: {
            name: 'course_id'
        },
        as: 'course'
    })

    Student.belongsToMany(models.class, {
        through: 'student_class',
        timestamps: false,
        foreignKey: {
            name: 'student_id'
        },
        as: 'class'
    })

    
}


module.exports = Student;
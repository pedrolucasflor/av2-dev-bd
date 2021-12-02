const { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const Subject = sequelize.define(name, {
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


Subject.associate = models => {

    Subject.belongsToMany(models.teacher, {
        through: 'teacher_subject',
        timestamps: false,
        foreignKey: {
            name: 'subject_id'
        },
        as: 'teachers'
    })


    Subject.hasMany(models.class, {
        foreignKey: {
            name: 'subject_id'
        },
        as: 'class'
    })


    Subject.belongsToMany(models.hardskill, {
        through: 'subject_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'subject_id'
        },
        as: 'hardskills'
    })

}

module.exports = Subject;
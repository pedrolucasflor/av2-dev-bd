const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const User = sequelize.define(name, {
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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


User.associate = (models) => {
    User.hasOne(models.student, {
        foreignKey: {
            name: 'user_id'
        },
        as: 'student'
    })

    User.hasOne(models.teacher, {
        foreignKey: {
            name: 'user_id'
        },
        as: 'teacher'
    })

    User.hasMany(models.question, {
        foreignKey: {
            name: 'user_id'
        },
        as: 'questions'
    })

}



module.exports = User
const  { DataTypes } = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const Question = sequelize.define(name, {
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

Question.associate = models => {
    Question.belongsTo(models.user, {
        foreignKey: {
            name: 'user_id'
        },
        as: 'user'
    })

    Question.belongsTo(models.user, {
        foreignKey: {
            name: 'hardskill_id'
        },
        as: 'hardskill'
    })
}


module.exports = Question;
const { DataTypes } = require("sequelize")
const name = require("path").basename(__filename.replace(".model", ""), ".js")

const sequelize = require('../index').getConnection()

const SoftSkill = sequelize.define(name, {
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


SoftSkill.associate = models => {

    SoftSkill.belongsToMany(models.student, {
        through: 'student_softskill',
        timestamps: false,
        foreignKey: {
            name: 'student_softskill'
        },
        as: 'students'
    })

}

module.exports = SoftSkill
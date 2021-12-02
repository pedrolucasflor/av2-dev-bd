
const models = require('../db/models')
const sequelize = require('../db/index').getConnection()

exports.store = async (a,id) => {

    const model = await models.student.findOne({
        where: { user_id: id },
        include: { association: 'hardskills' }
    })

    let refsHardSkills = []

    for (let h in a.hardskills){
        let hardSkill = a.hardskills[h]
    
       const [result] = await models.hardskill.findOrCreate({
            where: hardSkill
        })
        refsHardSkills.push(result.id)
        const [results, metadata] = await sequelize.query(`INSERT INTO student_hardskill VALUES  (${model.user_id}, ${result.id})`)
    }


    return true
}


exports.destroy = async (student, id) => {

    let refsHardSkills = []
    console.log(student.hardskills)

    for (let h in student.hardskills){
        let hardSkill = student.hardskills[h]
        

       const [result] = await models.hardskill.findOrCreate({
            where: hardSkill
        })

        console.log(result)
        console.log('resuld.it', result.id)
        const [results, metadata] = await sequelize.query(`
        DELETE FROM student_hardskill 
        WHERE student_hardskill.hardskill_id = ${result.id} 
        and student_hardskill.student_id = ${id}`)
    }



    return true
}
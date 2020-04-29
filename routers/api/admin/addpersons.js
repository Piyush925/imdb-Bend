const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('addperson')
async function addPersons(req, res, next) {
    try {
        const persons = await models.MoviePersons.findOrCreate({
            where: {
                roleId: req.body.roleId,
                name: req.body.name
            }
        })
        const updated = await models.MoviePersons.update({
            age: req.body.age
        },
            {
                returning: true, where: {
                    roleId: req.body.roleId,
                    name: req.body.name
                }
            })
        logger.info("successfully added person")
        res.status(200).json({
            message: "success",
            updated

        })
    }
    catch (err) {
        logger.error("error", { err })
        res.status(500).json({
            message: "error",
            err,

        })
        next(err)
    }

}
module.exports = { addPersons };
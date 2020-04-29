const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('deleteperson')
async function deletePersons(req, res, next) {
    try {
        const persons = await models.MoviePersons.destroy({
            where: {
                roleId: req.body.roleId,
                name: req.body.name
            }
        })
        logger.info("Deleted Persons")
        res.status(200).json({
            message: "success",
            persons
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
module.exports = { deletePersons };
const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('Actorlist')
async function actorList(req, res, next) {
    try {
        const actors = await models.MoviePersons.findAll({
            where: { roleId: "1" },
            group: ["name", "age"],
            attributes: ["name", "age"]
        })
        logger.info("sucessful get actorlist")
        res.status(200).json({
            message: "success",
            actors
        })

    }
    catch (err) {
        logger.error("error", { err })
        res.status(500).json({
            message: "error",
            err
        })
        next(err)
    }

}
module.exports = { actorList };
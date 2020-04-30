const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('Actorlist')
/** @description Fetching the actor list
 * @async
 * @method
 * @param {object} res - Reponse object with details of actors.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function actorList(res, next) {
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
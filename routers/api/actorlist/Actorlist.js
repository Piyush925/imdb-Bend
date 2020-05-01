const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('Actorlist')
const { success, failure } = require('../response')
/** @description Fetching the actor list
 * @async
 * @method
 * @param {object} res - Reponse object with details of actors.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function actorList(req, res, next) {
    try {
        const actors = await models.MoviePerson.findAll({
            where: { roleId: "1" },
            group: ["name", "age"],
            attributes: ["name", "age"]
        })
        logger.info("sucessful get actorlist")
        success(res, 200, actors)

    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        // res.status(500).json({
        //     message: "error",
        //     err
        // })
        next(err)
    }

}
module.exports = { actorList };
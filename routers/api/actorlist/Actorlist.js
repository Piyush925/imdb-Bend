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
        const id = await models.Roles.findOne({
            where: { role: "Actor" },
            attributes: ['id']
        })
        const actors = await models.MoviePerson.findAll({
            where: { roleId: id.id },
            group: ["name", "age"],
            attributes: ["name", "age"]
        })
        logger.info("sucessful get actorlist")
        success(res, 200, actors)

    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}
module.exports = { actorList };

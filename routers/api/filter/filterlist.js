const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('filterlist')
const { success, failure } = require('../response')
/** @description Method for fecth persons list 
 * @async
 * @method
 * @param {object} req - Request object contains the person role id --attributes roleId
 * @param {object} res - Reponse object with details of actors.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function filterList(req, res, next) {
    try {
        const persons = await models.MoviePerson.findAll({
            where: { roleId: req.params.id },
            group: ["name"],
            attributes: ["name"]
        })
        logger.info("success")
        success(res, 200, persons)
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}
module.exports = { filterList };
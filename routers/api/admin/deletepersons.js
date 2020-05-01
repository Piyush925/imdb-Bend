const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('deleteperson')
const { success, failure } = require('../response')
/** @description Method for deleting Persons of movie
 * @async
 * @method
 * @param {object} req - Request object contains the person details --attributes like roleId,name
 * @param {object} res - Reponse object with number of rows deleted.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function deletePersons(req, res, next) {
    try {
        const persons = await models.MoviePerson.destroy({
            where: {
                roleId: req.body.roleId,
                name: req.body.name
            }
        })
        logger.info("Deleted Persons")
        success(res, 200, persons)
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}
module.exports = { deletePersons };
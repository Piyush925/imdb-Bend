const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('addperson')
const { success, failure } = require('../response')
/** @description Method for adding Persons of movie
 * @async
 * @method
 * @param {object} req - Request object contains the person details --attributes like roleId,name,age
 * @param {object} res - Reponse object with details of persons added in database.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/

async function addPersons(req, res, next) {
    try {
        const persons = await models.MoviePerson.findOrCreate({
            where: {
                roleId: req.body.roleId,
                name: req.body.name
            }
        })
        const updated = await models.MoviePerson.update({
            age: req.body.age
        },
            {
                returning: true, where: {
                    roleId: req.body.roleId,
                    name: req.body.name
                }
            })
        logger.info("successfully added person")
        success(res, 200, updated)
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
    }

}
module.exports = { addPersons };
const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('deleteperson')
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
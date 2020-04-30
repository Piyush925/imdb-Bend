const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('filterlist')
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
        const persons = await models.MoviePersons.findAll({
            where: { roleId: req.params.id },
            group: ["name"],
            attributes: ["name"]
        })
        logger.info("success")
        res.status(200).json({
            message: "success",
            persons
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
module.exports = { filterList };
const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('list')
/** @description Method for fecthing rating and releaseYear of all movies
 * @async
 * @method
 * @param {object} req - Request object contains req.params  --attributes rating or review
 * @param {object} res - Reponse object with rating or releaseYear of movies.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function list(req, res, next) {
    try {
        const option = await models.Movies.findAll({
            group: [req.params.options],
            attributes: [req.params.options]
        })
        logger.info("success")
        res.status(200).json({
            message: "success",
            option
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
module.exports = { list };
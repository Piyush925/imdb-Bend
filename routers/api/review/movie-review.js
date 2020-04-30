const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('review')
/** @description Method for inserting or updating review of movies
 * @async
 * @method
 * @param {object} req - Request object contains review 
 * @param {object} res - Reponse object contains updated review.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function review(req, res, next) {
    try {
        const reviewUpdated = await models.Movies.update({
            review: req.body.review
        },
            { returning: true, where: { id: req.body.movieId } })
        logger.info("success")
        res.status(200).json({
            message: "success",
            reviewUpdated
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
module.exports = { review };
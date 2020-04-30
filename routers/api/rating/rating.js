const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('rating')
/** @description Method for inserting or updating rating of movies
 * @async
 * @method
 * @param {object} req - Request object contains rating 
 * @param {object} res - Reponse object contains updated rating.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function rating(req, res, next) {
    try {
        const rating = await models.Movies.findOne({
            where: { id: req.body.movieId }
        })
        const update = await models.Movies.update({
            rating: req.body.rating
        },
            {
                returning: true, where: { id: req.body.movieId }
            })
        logger.info("successful submited")
        res.status(200).json({
            message: "success",
            update
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
module.exports = { rating };
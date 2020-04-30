const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('getmovie')
/** @description Method for fecthing all movies
 * @async
 * @method
 * @param {object} res - Reponse object with details of movies.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function getMovies(res, next) {
    try {
        const movie = await models.Movies.findAll()
        logger.info("successful fetched movie")
        res.status(200).json({
            message: "success",
            movie
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
module.exports = { getMovies };
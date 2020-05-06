const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('getmovie')
const { success, failure } = require('../response')
/** @description Method for fecthing all movies
 * @async
 * @method
 * @param {object} res - Reponse object with details of movies.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function getMovies(req, res, next) {
    try {
        const movie = await models.Movies.findAll()
        logger.info("successful fetched movie")
        success(res, 200, movie)

    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}
module.exports = { getMovies };
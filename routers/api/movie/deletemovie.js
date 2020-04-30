const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('deletemovie')
/** @description Method for delete movies and also delete cast and crew of movies
 * @async
 * @method
 * @param {object} req - Request object contains the movies details --attributes movieId
 * @param {object} res - Reponse object with details of deleted movie and cast.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function deleteMovies(req, res, next) {
    try {
        const movie = await models.Movies.destroy({
            where: { id: req.body.movieId }
        })

        const deletePerson = await models.MoviePersons.destroy({
            where: { movieId: req.body.movieId }
        })
        logger.info("deleted movie")
        res.status(200).json({
            message: "success",
            movie, deletePerson
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
module.exports = { deleteMovies };
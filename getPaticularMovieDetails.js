const models = require('../../../models');
const queue = require('bull')
const movieQueue = queue("movieQueue","redis://127.0.0.1:6379")
const Logger = require('../../../services/logger')
const logger = new Logger('getparticulermovie')
const { success, failure } = require('../response')
/** @description Method for fetching details of particular movie 
 * @async
 * @method
 * @param {object} req - Request object contains the movie id 
 * @param {object} res - Reponse object with details of movies.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function getPaticularMovie(req,res,next){
   
    movieQueue.process(async (job,done)=>{
        await getMovies(req,res,next)
        done('null',done)
    })
}


async function getMovies(req, res, next) {
    try {
        movieQueue
        const movie = await models.Movies.findAll({
            where: { id: req.params.id },
            include: [{
                model: models.MoviePerson,
                required: true,
                include: [{
                    model: models.Roles,
                    required: true
                }]
            }],
        })
        logger.info("movie fetched successfully")
        success(res, 200, movie)
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}
module.exports = { getPaticularMovie };
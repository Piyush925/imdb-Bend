const models = require('../../../models');
const _ = require('lodash');
const { success, failure } = require('../response')
require('dotenv').config();
const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb("e5757d8592ad13ee79cd78f9d81e8fae")
const Logger = require('../../../services/logger')
const logger = new Logger('addmovie')
/** @description Method for adding movies and also fetching images and rating using tmdb api
 * @async
 * @method
 * @param {object} req - Request object contains the movie details --attributes like name,actorNameArray,actressNameArray,Director,Producer,RelaseYear
 * @param {object} res - Reponse object with details of movies inserted into databases.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function addMovies(req, res, next) {
    try {
        const actorId = await models.Roles.findOne({
            where: { role: "Actor" },
            attributes: ['id']
        })
        const actressId = await models.Roles.findOne({
            where: { role: "Actress" },
            attributes: ['id']
        })
        const directorId = await models.Roles.findOne({
            where: { role: "Director" },
            attributes: ['id']
        })
        const producerId = await models.Roles.findOne({
            where: { role: "Producer" },
            attributes: ['id']
        })
        const movieImgObj = await moviedb.searchMovie({ query: req.body.name })
        const movie = await models.Movies.create({
            name: req.body.name,
            releaseYear: req.body.releaseYear,
            rating: parseInt(_.first(movieImgObj.results).vote_average, 10),
            imgURL: "https://image.tmdb.org/t/p/w185" + _.first(movieImgObj.results).poster_path
        })

        let movieId = movie.dataValues.id;

        let Actor = [], Actress = [];
        req.body.Actors.map((item) => {
            return (Actor.push({
                movieId: movieId,
                roleId: actorId.id,
                name: item
            }))
        })
        req.body.Actress.map((item) => {
            return (Actress.push({
                movieId: movieId,
                roleId: actressId.id,
                name: item
            }))
        })
        const actors = await models.MoviePerson.bulkCreate(Actor);
        const actress = await models.MoviePerson.bulkCreate(Actress);
        const directorProducer = await models.MoviePerson.bulkCreate([
            {
                movieId: movieId,
                roleId: directorId.id,
                name: req.body.director,
            },
            {
                movieId: movieId,
                roleId: producerId.id,
                name: req.body.producer,
            }
        ])
        logger.info("success")
        success(res, 200, { movie, actors, actress, directorProducer })
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}

module.exports = { addMovies };

const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('filter')
const { success, failure } = require('../response')
/** @description Method for fetch movie by filter
 * @async
 * @method
 * @param {object} req - Request object contains the filter attributes on which basis we have to fetch movies --attributes producer,director,actors,actress
 * @param {object} res - Reponse object with details of movies.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function getFilter(req, res, next) {
    try {
        role = [], roleName = [];
        if (req.query.producer) {
            role.push("Producer")

            roleName.push(JSON.parse(req.query.producer))
        }
        if (req.query.director) {
            role.push("Director")
            roleName.push(JSON.parse(req.query.director))
        }
        if (req.query.actress) {
            role.push("Actress")

            roleName = roleName.concat(JSON.parse(req.query.actress))
        }
        if (req.query.actor) {
            role.push("Actor")

            roleName = roleName.concat(JSON.parse(req.query.actor))

        }
        const movie = await models.Movies.findAll({
            include: [{
                model: models.MoviePerson,
                where: { name: roleName },
                required: true,
                include: [{
                    model: models.Roles,
                    where: { role: role },
                    required: true
                }]
            }],
        })
        logger.info("filter success")
        success(res, 200, movie)
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}
module.exports = { getFilter };
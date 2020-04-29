const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('getmovie')
async function getMovies(req, res, next) {
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
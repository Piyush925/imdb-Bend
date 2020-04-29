const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('getparticulermovie')
async function getPaticularMovie(req, res, next) {
    try {
        const movie = await models.Movies.findAll({
            where: { id: req.params.id },
            include: [{
                model: models.MoviePersons,
                required: true,
                include: [{
                    model: models.Roles,
                    required: true
                }]
            }],
        })
        logger.info("movie fetched successfully")
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
module.exports = { getPaticularMovie };
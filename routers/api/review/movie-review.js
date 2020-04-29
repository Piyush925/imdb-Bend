const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('review')
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
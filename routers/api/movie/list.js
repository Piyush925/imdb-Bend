const models = require('../../../models');
const Logger = require('../../../services/logger')
const logger = new Logger('list')
async function list(req, res, next) {
    try {
        const option = await models.Movies.findAll({
            group: [req.params.options],
            attributes: [req.params.options]
        })
        logger.info("success")
        res.status(200).json({
            message: "success",
            option
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
module.exports = { list };
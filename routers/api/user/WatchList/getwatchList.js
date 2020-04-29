const models = require('../../../../models');
const jwt = require('jsonwebtoken')
const Logger = require('../../../../services/logger')
const logger = new Logger('getwatchlist')
async function getwatchList(req, res, next) {
    try {
        var token = req.headers['x-access-token'];
        var decoded = jwt.verify(token, 'nodeauthsecret')
        const watchlist = await models.watchList.findAll({
            where: { userId: decoded.userId },
            include: [{
                model: models.Movies,
                required: true
            }]
        })
        logger.info("success")
        res.status(200).json({
            message: "success",
            watchlist
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


module.exports = { getwatchList };
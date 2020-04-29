const models = require('../../../../models');
const jwt = require('jsonwebtoken');
const Logger = require('../../../../services/logger')
const logger = new Logger('deletefavlist')
async function deleteFavList(req, res, next) {
    try {
        var token = req.headers['x-access-token'];
        var decoded = jwt.verify(token, 'nodeauthsecret')
        const delFavlist = await models.favList.destroy({
            where: {
                userId: decoded.userId,
                movieId: req.body.movieId
            }
        })
        logger.info("success")
        res.status(200).json({
            message: "success",
            delFavlist
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


module.exports = { deleteFavList };
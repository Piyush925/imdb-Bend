const models = require('../../../../models');
const jwt = require('jsonwebtoken')
const Logger = require('../../../../services/logger')
const logger = new Logger('getwatchlist')
const { success, failure } = require('../../response')
/** @description Method for fecth movies from user Wacthlist
 * @async
 * @method
 * @param {object} req - Request object contains token for userId 
 * @param {object} res - Reponse object contains movies in Watchlist.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function getWatchList(req, res, next) {
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
        success(res, 200, watchlist)
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}


module.exports = { getWatchList };
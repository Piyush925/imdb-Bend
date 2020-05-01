const models = require('../../../../models');
const jwt = require('jsonwebtoken')
const Logger = require('../../../../services/logger')
const logger = new Logger('deleteWatchlist')
const { success, failure } = require('../../response')
/** @description Method for delete movies from user Wacthlist
 * @async
 * @method
 * @param {object} req - Request object contains movieId of movies which is to be deleted from Watchlist 
 * @param {object} res - Reponse object contains deleted row count.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function deleteWatchList(req, res, next) {
    try {
        var token = req.headers['x-access-token'];
        var decoded = jwt.verify(token, 'nodeauthsecret')
        const delWatchlist = await models.watchList.destroy({
            where: {
                userId: decoded.userId,
                movieId: req.body.movieId
            }
        })
        logger.info("success")
        success(res, 200, delWatchlist)
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }

}


module.exports = { deleteWatchList };
const models = require('../../../../models');
const jwt = require('jsonwebtoken')
const Logger = require('../../../../services/logger')
const logger = new Logger('addfavlist')
const { success, failure } = require('../../response')
/** @description Method for add movies in user Favlist
 * @async
 * @method
 * @param {object} req - Request object contains movieId of movies which is to be added in favlist 
 * @param {object} res - Reponse object contains movies added in favlist.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function addFavList(req, res, next) {
    try {
        var token = req.headers['x-access-token'];
        var decoded = jwt.verify(token, 'nodeauthsecret')
        const favlist = await models.favList.findOrCreate({
            where: {
                userId: decoded.userId,
                movieId: req.body.movieId
            }
        })
        logger.info("success")
        success(res, 200, favlist)
    }
    catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }
}


module.exports = { addFavList };
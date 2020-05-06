const models = require('../../../../models');
const jwt = require('jsonwebtoken')
const Logger = require('../../../../services/logger')
const logger = new Logger('getfavlist')
const { success, failure } = require('../../response')
/** @description Method for fecth movies from user Favlist
 * @async
 * @method
 * @param {object} req - Request object contains token for userId 
 * @param {object} res - Reponse object contains movies in favlist.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function getFavList(req, res, next) {
    try {
        var token = req.headers['x-access-token'];
        var decoded = jwt.verify(token, 'nodeauthsecret')
        const favlist = await models.favList.findAll({
            where: { userId: decoded.userId },
            include: [{
                model: models.Movies,
                required: true
            }]
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


module.exports = { getFavList };
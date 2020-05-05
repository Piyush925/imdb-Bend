const models = require('../../../models')
const Logger = require('../../../services/logger')
const logger = new Logger('signup')
const { success, failure } = require('../response')
/** @description Method for creating new User
 * @async
 * @method
 * @param {object} req - Request object contains User personsal details --attributes firstName,lastName,email,password,role 
 * @param {object} res - Reponse object contains user details inserted in database.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function createUser(req, res, next) {
    try {
        const user = await models.User.create(req.body)
        logger.info("success")
        success(res, 200, user)

    } catch (err) {
        logger.error("error", { err })
        failure(res, 500, err)
        next(err)
    }
}

module.exports = { createUser }
       

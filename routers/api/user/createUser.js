const models = require('../../../models')
const Logger = require('../../../services/logger')
const logger = new Logger('signup')
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
        res.status(200).json({
            user
        })

    } catch (error) {
        logger.error("error", { err })
        res.status(500).json({ error })
        next(err)
    }
}

module.exports = { createUser }
       

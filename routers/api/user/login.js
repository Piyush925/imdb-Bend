const models = require('../../../models')
const jwt = require('jsonwebtoken')
const Logger = require('../../../services/logger')
const logger = new Logger('login')
const { success, failure } = require('../response')
/** @description Method for Login User
 * @async
 * @method
 * @param {object} req - Request object contains User login details --attributes email,password,role 
 * @param {object} res - Reponse object contains user details inserted in database.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function login(req, res, next) {
    try {
        const user = await models.User.findOne({
            where: { email: req.body.email }
        })
        if (user) {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {

                    if (user.role.toUpperCase() === req.body.role.toUpperCase()) {
                        var token = jwt.sign({ userId: user.id }, 'nodeauthsecret', { expiresIn: 86400 * 30 });

                        logger.info("login success")
                        success(res, 200, token)
                    }
                    else {
                        logger.error("InValid Role")
                        failure(res, 401, "Invalid role")
                    }
                }
                else {
                    logger.error("Wrong Password")
                    failure(res, 401, "Wrong Password")
                }

            })
        }
        else {
            logger.error("InValid User", {
                email: req.body.email
            })
            failure(res, 401, "User Not Found")
        }
    } catch (error) {
        logger.error("Error", { error })
        failure(res, 500, error)
    }
}

module.exports = { login }

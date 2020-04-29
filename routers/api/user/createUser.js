const models = require('../../../models')
const Logger = require('../../../services/logger')
const logger = new Logger('signup')
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
    }
}

module.exports = { createUser }
const models=require('../../../models')
const jwt = require('jsonwebtoken')
const Logger = require('../../../services/logger')
const logger = new Logger('login')
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
        const user= await models.User.findOne({
            where:{email:req.body.email}
        })
        if(user){
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
                
                if(user.role.toUpperCase()===req.body.role.toUpperCase())
               { var token = jwt.sign({ userId: user.id }, 'nodeauthsecret', { expiresIn: 86400 * 30 });
               
               logger.info("login success")
                res.status(200).json({
                    message:"login successfull",
                    token
                })
            }
            else{
                logger.error("InValid Role")
                res.status(401).json({
                    message:"Please enter valid role"
                })
            }
            }
            else{
                logger.error("Wrong Password")
                res.status(401).json({
                    message:"Wrong password"
                })   
            }

        })
    }
    else{
        logger.error("InValid User",{
            email:req.body.email
        })
        res.status(401).json({
            message:"User not found"
        }) 
    }
    } catch (error) {
        logger.error("Error",{error})
        res.status(500).json({ error })
        next(err)
    }
}

module.exports={login}

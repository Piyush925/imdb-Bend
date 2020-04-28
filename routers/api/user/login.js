const models=require('../../../models')

const jwt = require('jsonwebtoken')

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
               
                res.status(200).json({
                    message:"login successfull",
                    token,
                    role:req.body.role
                })
            }
            else{
                res.status(401).json({
                    message:"Please enter valid role"
                })
            }
            }
            else{
                res.status(401).json({
                    message:"Wrong password"
                })   
            }

        })
    }
    else{
        res.status(401).json({
            message:"User not found"
        }) 
    }
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports={login}

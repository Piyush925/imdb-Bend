const models=require('../../../../models');
const jwt = require('jsonwebtoken')
async function getwatchList(req,res,next)
{
    try{
        var token=req.headers['x-access-token'];
        var decoded=jwt.verify(token,'nodeauthsecret') 
          const watchlist=await models.watchList.findAll({
              where:{userId:decoded.userId}
          })           
    res.status(200).json({
        message:"success",
        watchlist
    })
}
    catch(err){
        res.status(500).json({
            message:"error",
            err
        })
        next(err)
    }

}


module.exports={getwatchList};
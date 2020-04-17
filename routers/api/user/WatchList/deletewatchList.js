const models=require('../../../../models');
const jwt = require('jsonwebtoken')
async function deleteWatchList(req,res,next)
{
    try{
        var token=req.headers['x-access-token'];
        var decoded=jwt.verify(token,'nodeauthsecret')      
          const delwatchlist=await models.watchList.destroy({
              where:{userId:decoded.userId,
            movieId:req.body.movieid}
          })           
    res.status(200).json({
        message:"success",
        delwatchlist
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


module.exports={deleteWatchList};
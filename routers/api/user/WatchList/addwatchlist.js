const models=require('../../../../models');

const jwt = require('jsonwebtoken')
async function addWatchList(req,res,next)
{
    try{
        var token=req.headers['x-access-token'];
         var decoded=jwt.verify(token,'nodeauthsecret') 
          const watchlist=await models.watchList.create({
              userId:decoded.userId,
              movieId:req.body.movieId
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
        
    }

}


module.exports={addWatchList};
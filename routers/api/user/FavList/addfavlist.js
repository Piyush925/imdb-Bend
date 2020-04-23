const models=require('../../../../models');

const jwt = require('jsonwebtoken')
async function addFavList(req,res,next)
{
    try{
        var token=req.headers['x-access-token'];
         var decoded=jwt.verify(token,'nodeauthsecret') 
          const favlist=await models.favList.findOrCreate({
             where:{ userId:decoded.userId,
              movieId:req.body.movieId}
          })           
    res.status(200).json({
        message:"success",
        favlist
     
    })
}
    catch(err){
        res.status(500).json({
            message:"error",
            err
        })
        
    }

}


module.exports={addFavList};
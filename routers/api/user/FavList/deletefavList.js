const models=require('../../../../models');
const jwt=require('jsonwebtoken')
async function deleteFavList(req,res,next)
{
    try{
        var token=req.headers['x-access-token'];
        var decoded=jwt.verify(token,'nodeauthsecret')  
          const delfavlist=await models.favlist.destroy({
              where:{userId:decoded.userId,
            movieId:req.body.movieId}
          })           
    res.status(200).json({
        message:"success",
        delfavlist
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


module.exports={deleteFavList};
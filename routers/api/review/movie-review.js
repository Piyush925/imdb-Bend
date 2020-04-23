const models=require('../../../models');

async function review(req,res,next)
{
    try{
        const reviewupdated = await models.Movies.update({
            review:req.body.review},
           {returning:true, where:{id:req.body.movieId}})
    res.status(200).json({

        message:"success",
        reviewupdated
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
module.exports={review};
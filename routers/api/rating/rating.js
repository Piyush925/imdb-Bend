const models=require('../../../models');

async function rating(req,res,next)
{
    try{
        const rating = await models.Movies.findOne({
            where:{id:req.body.movieId}
        })
        console.log(rating.rating)
        //let rateupdated=(rating.rating+req.body.rating)/2
        const update=await models.Movies.update({
            rating:req.body.rating},
           {returning:true, where:{id:req.body.movieId}
        })
    res.status(200).json({

        message:"success",
        update
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
module.exports={rating};
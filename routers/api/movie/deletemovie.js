const models=require('../../../models');

async function deletemovies(req,res,next)
{
    try{
        const movie = await models.Movies.destroy({
            where:{id:req.body.movieId}
        })

       
        const deleteperson=await models.MoviePersons.destroy({
           where:{movieId:req.body.movieId}
        })
    res.status(200).json({

        message:"success",
        movie,deleteperson
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
module.exports={deletemovies};
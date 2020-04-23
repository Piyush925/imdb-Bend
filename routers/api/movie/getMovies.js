const models=require('../../../models');

async function getMovies(req,res,next)
{
    try{
        const movie = await models.Movies.findAll()
    res.status(200).json({

        message:"success",
        movie
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
module.exports={getMovies};
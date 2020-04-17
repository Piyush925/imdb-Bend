const models=require('../../models');

async function getPaticularMovie(req,res,next)
{
    try{
        const movie = await models.Movies.findAll({
            where:{id:req.params.id},
            include: [{
                model: models.MoviePersons,
                required: true,
               include:[{
                   model:models.Roles,
                   required:true
               }]
            }],
        })
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
module.exports={getPaticularMovie};
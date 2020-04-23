const models=require('../../../models');

async function actorList(req,res,next)
{
    try{
        const actors = await models.MoviePersons.findAll({
            where:{roleId:"1"},
            group:["name","age"],
            attributes:["name","age"]
            
        })
    res.status(200).json({

        message:"success",
        actors
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
module.exports={actorList};
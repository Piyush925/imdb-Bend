const models=require('../../../models');

async function filterlist(req,res,next)
{
    try{
        const persons = await models.MoviePersons.findAll({
            where:{roleId:req.params.id},
            group:["name"],
            attributes:["name"]
            
        })
    res.status(200).json({

        message:"success",
        persons
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
module.exports={filterlist};
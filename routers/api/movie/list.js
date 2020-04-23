const models=require('../../../models');

async function list(req,res,next)
{
    try{
        const option = await models.Movies.findAll({
            group:[req.params.options],
            attributes:[req.params.options]
            
        })
    res.status(200).json({

        message:"success",
        option
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
module.exports={list};
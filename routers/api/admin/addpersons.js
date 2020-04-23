const models=require('../../../models');
async function addPersons(req,res,next)
{
     try{      
        const persons = await models.MoviePersons.findOrCreate({         
            where:{
                roleId:req.body.roleId,
                name:req.body.name
            }
        })
        const updated=await models.MoviePersons.update({
            age:req.body.age},
            {returning:true, where:{roleId:req.body.roleId,
            name:req.body.name}
        })

    res.status(200).json({

        message:"success",
        updated
       
    })
    }
    catch(err){
        res.status(500).json({
            message:"error",
            err,
           
        })
        next(err)
    }

}
module.exports={addPersons};
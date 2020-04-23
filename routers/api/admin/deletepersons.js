const models=require('../../../models');
async function deletePersons(req,res,next)
{
     try{      
        const persons = await models.MoviePersons.destroy({         
            where:{
                roleId:req.body.roleId,
                name:req.body.name
            }
        })
    

    res.status(200).json({

        message:"success",
        persons
       
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
module.exports={deletePersons};
const models=require('../../models');
const queryString=require('query-string')
async function getByYear(req,res,next)
{
     try{role=[],rolename=[];
        if(req.query.producer)
        {
          role.push("Producer")
          
         rolename.push(JSON.parse(req.query.producer))
         }
        if(req.query.director)
        {
            role.push("Director")
            rolename.push(JSON.parse(req.query.director))
        }
        if(req.query.actress)
        {
          role.push("Actress")
         
         rolename=rolename.concat(JSON.parse(req.query.actress))
        }
        if(req.query.actor)
        {
            role.push("Actor")
            
            rolename=rolename.concat(JSON.parse(req.query.actor))
         
        }
        console.log(role,rolename)
      
        const movie = await models.Movies.findAll({         
            include: [{
                model: models.MoviePersons,
                where:{name:rolename},
                required: true,
               include:[{
                   model:models.Roles,
                    where:{role:role},
                   required:true
               }]
            }],
        })
    res.status(200).json({

        message:"success",
        movie,
        params:req.query
    })

   


    }
    catch(err){
        res.status(500).json({
            message:"error",
            err,
             params:req.query
        })
        next(err)
    }

}
module.exports={getByYear};
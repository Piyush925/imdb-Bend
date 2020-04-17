const models=require('../../models');

async function getByYear(req,res,next)
{
    try{let obj={},role=[],rolename=[];
        if(req.query.rating)
        {
           obj={...obj,rating:req.query.rating}
        }
        if(req.query.year)
        {
           obj={...obj,releaseYear:req.query.year}
        }
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
      
        const user = await models.Movies.findAll({
            
            where:obj,
          
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
        user
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
module.exports={getByYear};
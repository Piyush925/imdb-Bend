const models=require('../../../models');
require('dotenv').config();
const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb(process.env.TMDB_API_KEY)
const Logger = require('../../../services/logger')
const logger = new Logger('addmovie')
async function addMovies(req,res,next)
{
    try{
         const movieImgObj = await moviedb.searchMovie({ query: req.body.name })
          const movie=await models.Movies.create({
             name:req.body.name,
             releaseYear:req.body.releaseYear,
             rating:parseInt(movieImgObj.results[0].vote_average,10),
             imgURL:"https://image.tmdb.org/t/p/w185"+movieImgObj.results[0].poster_path

         })
          
   let movieId=movie.dataValues.id;
   
   let Actor=[],Actress=[];
   req.body.Actors.map((item)=>{
       return (Actor.push({
           movieId:movieId,
           roleId:1,
           name:item
       }))
   })
   req.body.Actress.map((item)=>{
    return (Actress.push({
        movieId:movieId,
        roleId:2,
        name:item
    }))
})
    const personDetails=await models.MoviePersons.bulkCreate(Actor);
    const personActress=await models.MoviePersons.bulkCreate(Actress);
    const dirpro=await models.MoviePersons.bulkCreate([
        {
            movieId:movieId,
            roleId:3,
            name:req.body.director, 
        },
        {
            movieId:movieId,
            roleId:4,
            name:req.body.producer, 
        }
    ])
    logger.info("success")
    res.status(200).json({
        message:"success",
        movie:{
            movie,personActress,personDetails,dirpro
        }
        
    })
}
    catch(err){
        logger.error("error",{err})
        res.status(500).json({
            message:"error",
            err
        })
        next(err)
    }

}


module.exports={addMovies};

const models=require('../../../models');
const _ =require('lodash');
require('dotenv').config();
const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb(process.env.TMDB_API_KEY)
const Logger = require('../../../services/logger')
const logger = new Logger('addmovie')
/** @description Method for adding movies and also fetching images and rating using tmdb api
 * @async
 * @method
 * @param {object} req - Request object contains the movie details --attributes like name,actorNameArray,actressNameArray,Director,Producer,RelaseYear
 * @param {object} res - Reponse object with details of movies inserted into databases.
 * @param {function next(error) {
}} next - calls the error handling middleware.
*/
async function addMovies(req,res,next)
{
    try{
         const movieImgObj = await moviedb.searchMovie({ query: req.body.name })
          const movie=await models.Movies.create({
             name:req.body.name,
             releaseYear:req.body.releaseYear,
             rating:parseInt(_.first(movieImgObj.results).vote_average,10),
             imgURL:"https://image.tmdb.org/t/p/w185"+_.first(movieImgObj.results).poster_path

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
    const personDetails=await models.MoviePerson.bulkCreate(Actor);
    const personActress=await models.MoviePerson.bulkCreate(Actress);
    const dirpro=await models.MoviePerson.bulkCreate([
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

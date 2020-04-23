const models=require('../../../models');
const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb("e5757d8592ad13ee79cd78f9d81e8fae")
async function addMovies(req,res,next)
{
    try{
         const movieimgobj = await moviedb.searchMovie({ query: req.body.name })
         console.log(movieimgobj.results[0])
        // Console.log(movieimgobj.results[0].poster_path)
          const movie=await models.Movies.create({
             name:req.body.name,
             releaseYear:req.body.releaseYear,
             rating:parseInt(movieimgobj.results[0].vote_average,10),
             imgURL:"https://image.tmdb.org/t/p/w185"+movieimgobj.results[0].poster_path

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
    const persondetails=await models.MoviePersons.bulkCreate(Actor);
    const personactress=await models.MoviePersons.bulkCreate(Actress);
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
    res.status(200).json({
        message:"success",
        movie:{
            movie,personactress,persondetails,dirpro
        }
        
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


module.exports={addMovies};
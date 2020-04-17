'use strict';
const MovieDb = require('moviedb-promise')
const moment=require('moment');
const moviedb = new MovieDb("e5757d8592ad13ee79cd78f9d81e8fae")
const models=require('../models')
module.exports = {
  up:async function(queryInterface, Sequelize) {
    
    
    
    try {
      const res = await moviedb.miscPopularMovies()
      
      let movies=res.results;
      let moviedata=[];
     
      movies.map(async (item,key)=>{
        let data=[], actors=[],actress=[],director=null,producer=null;
        moviedata.push({name:item.title,
          releaseYear:moment(item.release_date).format("YYYY"),
          imgURL:"https://image.tmdb.org/t/p/w185"+item.poster_path,
          rating:item.vote_average,
          createdAt:new Date(),
          updatedAt:new Date()})
       
      const cast=await moviedb.movieCredits(item.id);
        cast.cast.map(item1=>{
         if(item1.gender===1 && actress.length<3)
          { actress.push("female")
            data.push({
              movieId:key+9,
              roleId:2,
              name:item1.name,
              createdAt:new Date(),
        updatedAt:new Date()
            })
           
          }
          if(item1.gender===2 && actors.length<3)
          { actors.push("a")
            data.push({
              movieId:key+9,
              roleId:1,
              name:item1.name,
              createdAt:new Date(),
        updatedAt:new Date()
            })
            
          }
          
        })
        cast.crew.map(item2=>{
          if(item2.job==='Director' && director===null)
           {
             director={
               movieId:key+9,
               roleId:3,
               name:item2.name,
               createdAt:new Date(),
        updatedAt:new Date()
             }
             data.push(director)
           
           }
           if(item2.job==='Producer' && producer===null)
           {
             producer={
               movieId:key+9,
               roleId:4,
               name:item2.name,
               createdAt:new Date(),
        updatedAt:new Date()
             }
             data.push(producer)
             
           }
           
         })
         
        insert(data)
        
      })
     async function insert(data){
       await models.MoviePersons.bulkCreate(data)
      }
     
     } catch (e) {
      console.log(e)
    }
    
    
 
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

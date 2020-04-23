'use strict';
const models=require('../models');
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    name: DataTypes.STRING,
    releaseYear: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    imgURL: DataTypes.STRING,
    review:DataTypes.STRING
  }, {});
  Movies.associate = function(models) {
    // associations can be defined here

    Movies.hasMany(models.MoviePersons,{foreignKey:'movieId'})
  };
  return Movies;
};
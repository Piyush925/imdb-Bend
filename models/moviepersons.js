'use strict';
const models=require('../models')
module.exports = (sequelize, DataTypes) => {
  const MoviePersons = sequelize.define('MoviePersons', {
    roleId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    age:DataTypes.INTEGER
  }, {});
  MoviePersons.associate = function(models) {
    // associations can be defined here
   
    MoviePersons.belongsTo(models.Roles, {foreignKey: 'roleId', targetKey: 'id'});
  };
  return MoviePersons;
};
'use strict';
const models=require('../models')
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
   // Roles.hasMany(models.MoviePersons,{foreignKey:'roleId'})
   
  };
  return Roles;
};
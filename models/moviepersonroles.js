'use strict';
module.exports = (sequelize, DataTypes) => {
  const MoviePersonRoles = sequelize.define('MoviePersonRoles', {
    roleId: DataTypes.INTEGER
  }, {});
  MoviePersonRoles.associate = function(models) {
    // associations can be defined here
  };
  return MoviePersonRoles;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const favList = sequelize.define('favList', {
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  favList.associate = function(models) {
    // associations can be defined here
  };
  return favList;
};
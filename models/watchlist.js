'use strict';
module.exports = (sequelize, DataTypes) => {
  const watchList = sequelize.define('watchList', {
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  watchList.associate = function(models) {
    // associations can be defined here
  };
  return watchList;
};
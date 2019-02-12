'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    nomstream: DataTypes.STRING,
    nomjeux: DataTypes.STRING,
    nbviewers: DataTypes.INTEGER,
    online: DataTypes.BOOLEAN
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
  };
  return Status;
};
const userModel = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING  
  }, {
    tableName: 'user',
    timestamps: false,
    underscored: true,
  });
  return user;
}
module.exports = userModel;
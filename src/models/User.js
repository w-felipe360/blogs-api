const userModel = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING, 
  }, {
    tableName: 'user',
    timestamps: false,
    underscored: true,
  });
  return user;
}
module.exports = userModel;
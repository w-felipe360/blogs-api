const userModel = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     autoIncrement: true,
     primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING, 
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });
  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      foreignkey: 'userId',
      as: 'blog_posts'
    })
  }
  return user;
}

module.exports = userModel;
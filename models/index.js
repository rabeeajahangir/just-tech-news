const User = require('./User');
const Post = require('./Post');


// create associations (a user can make many posts but a post belongs to one user only)
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Post };
const User = require('../models/user');

class UserService {
  async login(username, password) {
    try {
      const user = await User.findOne({ author_user: username, author_pwd: password });

      if (user) {
        return true; 
      } else {
        return false; 
      }
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao efetuar o login.');
    }
  }
}

module.exports = new UserService();
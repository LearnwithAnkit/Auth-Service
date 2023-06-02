const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong at repository layer");
      throw { error };
    }
  }
  async delete(userId) {
    try {
      const user = this.userRepository.destroy({
        where: {
          id: userId,
        },
      });
      return user;
    } catch (error) {
      console.log("Something Went Wrong on serice Layer");
    }
    throw { error };
  }
  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation");
      throw { error };
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in token verfication");
      throw { error };
    }
  }
  checkPassword(userInputPlainPassword, encyrptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encyrptedPassword);
    } catch (error) {
      console.log("Something went wrong in password comparision");
      throw error;
    }
  }
}
module.exports = UserService;

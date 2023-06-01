const UserRepository = require("../repository/user-repository");

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
}
module.exports = UserService;

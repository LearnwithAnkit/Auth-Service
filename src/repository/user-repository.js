const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = User.create(data);
      return user;
    } catch (error) {
      console.log("Something Went Wrong on repository Layer");
    }
    throw { error };
  }
  async delete(userId) {
    try {
      const user = User.destroy({
        where: {
          id: userId,
        },
      });
      return user;
    } catch (error) {
      console.log("Something Went Wrong on repository Layer");
    }
    throw { error };
  }
}
module.exports = UserRepository;

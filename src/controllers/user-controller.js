const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      message: "Sucessfully created a new user",
      data: response,
      sucess: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {},
      sucess: false,
      err: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.email,
      req.body.password
    );
    return res
      .status(200)
      .json({
        sucess: true,
        data: response,
        err: {},
        message: "Succesfully signed in",
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {},
      sucess: false,
      err: error,
    });
  }
};

module.exports = {
  create,
  signIn,
};

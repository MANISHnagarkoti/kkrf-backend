const userModel = require("../models/user");

exports.addFormByUser = async (req, res) => {
  try {
    const { name, email, phno, query } = req.body;

    console.log()

    const user = new userModel({
      name,
      email,
      phno,
      query,
    });

    await user.save();

    res.status(200).send({
      sucess: true,
      message: "Form submit sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "error while fetching all users",
      error,
    });
  }
};

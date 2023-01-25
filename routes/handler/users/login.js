const bcrypt = require("bcrypt");
const { User } = require("../../../models");
const Validator = require("fastest-validator");

const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    email: "email|empt:false",
    password: "string|empty:false",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    //jika ada length berarti ada error
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await User.findOne({
    where: { email: req.body.email },
  });

  try {
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not register",
      });
    }   

    const isValid = await bcrypt.compare(req.body.password, user.password);

    if (!isValid) {
      return res.status(404).json({
        status: "error",
        message: "Password Salah",
      });
    }

    res.json({
      status: "success",
      data: {
        id: user.id,
        role: user.role,
        profession: user.profession,
        email: user.email,
      },
    });
  } catch (error) {
    return res.json({
      status: "error",
      message: error,
    });
  }
};

const USER = require("../model/user");

exports.createProfile = async function (req, res, next) {
  try {
    const { Name,Phone,Email,Age,Address,Url } = req.body;

    if (!Name || !Phone || !Email || !Age || !Address|| !Url) {
      throw new Error("Please enter all details");
    }
    
    const data = await USER.create(req.body);
    res.status(201).json({
      message: "user create successfull",
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.getUser = async function (req, res, next) {
  try {
    
    const data = await USER.findOne({ Email: req.body.Email });
    if (!data) {
      throw new Error("invalid email address");
    }
    res.status(200).json({
      message: "your profile",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fails",
      message: error.message,
    });
  }
};

exports.deleteUser = async function (req, res, next) {
  try {
    console.log(req.params);
    await USER.findByIdAndDelete(req.params.id);
    res.status(204).json({});
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
exports.updateProfile = async function (req, res, next) {
  try {
    console.log(req.params);
    await USER.findByIdAndUpdate(req.params.id,req.body);
   res.status(200).json({
     message: "record update successfull",
   });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

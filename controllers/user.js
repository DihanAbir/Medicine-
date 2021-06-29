const asycnHandler = require("../middleware/async");
const User = require("../models/User");

//@desc add  a patient
//@route POST  /api/v1/user/addPatient
//@access Public
exports.addPatient = asycnHandler(async (req, res) => {
  const { name, phone, age, address, gender, bloodGroup } = req.body;
  // console.log(req.body)

  // Create user
  const user = await User.create({
    name,
    phone,
    age,
    address,
    gender,
    bloodGroup,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc get all patients
//@route GET  /api/v1/user
//@access Public
exports.getAllUsers = asycnHandler(async (req, res) => {
  const users = await User.find();
  // console.log(`users`, users)
  if (!users) {
    res.status(200).json({
      data: "There is no user",
    });
  }
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

//@desc get a user by phone number
//@route GET  /api/v1/user/:phoneNumber
//@access Public
exports.getAUser = asycnHandler(async (req, res) => {
  const _id = req.params.id;

  const user = await User.findById({ _id });

  if (!user) {
    res.status(200).json({
      data: "There is no user",
    });
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc get a user by userId
//@route GET  /api/v1/user/profile/:id
//@access Public
exports.getAUserbyid = asycnHandler(async (req, res) => {
  const id = req.params.id;

  const user = await User.findById({ _id: id });

  if (!user) {
    res.status(200).json({
      data: "There is no user",
    });
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc Update a user by phone number
//@route PUT  /api/v1/user/:phoneNumber
//@access Public
exports.updateAUser = asycnHandler(async (req, res) => {
  const _id = req.params.id;
  const user = await User.findById({ _id });

  if (!user) {
    res.status(200).json({
      data: "There is no user",
    });
  }
  console.log(`user`, user.bloodGroup);
  console.log(`re.user`, req.body.bloodGroup);

  if (user) {
    user.name = req.body.name || user.name;
    user.phone = req.body.phone || user.phone;
    user.age = req.body.age || user.age;
    user.bloodGroup = req.body.bloodGroup || user.bloodGroup;
    user.gender = req.body.gender || user.gender;
    user.address = req.body.address || user.address;
  }

  const updatedUser = await user.save();

  res.status(200).json({
    success: true,
    data: updatedUser,
  });
});

//@desc Delete a user by phone number
//@route DELETE  /api/v1/user/:id
//@access Public
exports.deleteAUser = asycnHandler(async (req, res) => {
  const _id = req.params.id;
  const user = await User.findByIdAndDelete({ _id });

  if (!user) {
    res.status(200).json({
      data: "There is no user",
    });
  }

  // const deleteUser = user.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

//@desc Delete dropallUser
//@route DELETE  /api/v1/user/:phoneNumber
//@access Public
exports.dropallUser = asycnHandler(async (req, res) => {
  const user = await User.deleteMany();

  // if (!user) {
  //   res.status(200).json({
  //     data: "There is no user",
  //   });
  // }

  try {
    res.status(200).json({
      success: true,
      Message: "All Data Deleted Successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      Message: "All Data Deleted failed",
    });
  }
});

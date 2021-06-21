const asycnHandler = require("../middleware/async");
const Disease = require("../models/Disease");

//@desc add  a disease with.userid.
//@route POST  /api/v1/disease/addDisease/:id
//@access Public
exports.addADisease = asycnHandler(async (req, res) => {
  const userid = req.params.userid;

  const { title, bill, pay, treatment, treatmentPlan } = req.body;
  console.log(req.body);
  due = bill - pay;
  // Create user
  const disease = await Disease.create({
    title,
    bill,
    due,
    pay,
    treatment,
    treatmentPlan,
    userid,
  });

  try {
    res.status(200).json({
      success: true,
      data: disease,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: "error ",
    });
  }
});

//@desc Get All disease of a single user.
//@route GET  /api/v1/disease/:userid
//@access Public
exports.getAllDisease = asycnHandler(async (req, res) => {
  const userId = req.params.userId;
  console.log(`userid`, userId);
  console.log(`userid`, typeof userId);
  // find by user id.
  const allDisease = await Disease.find({ userid: userId });

  res.status(200).json({
    success: true,
    count: allDisease.length,
    data: allDisease,
  });
});

//@desc Get All diseases
//@route GET  /api/v1/disease/
//@access Public
exports.getAllTheDiseases = asycnHandler(async (req, res) => {
  const allDisease = await Disease.find();

  if (!allDisease) {
    res.status(400).json({
      success: false,
      count: allDisease.length,
      data: "there is no disease",
    });
  }

  res.status(200).json({
    success: true,
    count: allDisease.length,
    data: allDisease,
  });
});


//@desc get A disease by id
//@route POST  /api/v1/disease/:id
//@access Public
exports.getADisease = asycnHandler(async (req, res) => {
  const id = req.params.id;
  console.log(`id`, id);
  // Create user
  const disease = await Disease.findById(id);
  if (!disease) {
    res.status(400).json({
      success: true,
      data: "There is no disease on this id.",
    });
  }
  res.status(200).json({
    success: true,
    count: disease.length,
    data: disease,
  });
});

//@desc delete a Disease
//@route DELETE /api/v1/disease/updateDisease/:id
//@access Public
exports.deleteADisease = asycnHandler(async (req, res) => {
  const id = req.params.id;
  // Create user
  const disease = await Disease.findById(id);

  if (!disease) {
    res.status(400).json({
      success: false,
      data: "there is no disease on this id.",
    });
  }

  await disease.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

//@desc update a Disease
//@route PUT  /api/v1/disease/updateDisease/:id
//@access Public
exports.updateADisease = asycnHandler(async (req, res) => {
  const { title, bill, due, pay, treatment, treatmentPlan } = req.body;

  const id = req.params.id;
  // Create user
  const disease = await Disease.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!disease) {
    res.status(400).json({
      success: false,
      data: "there is no disease on this id.",
    });
  }

  res.status(200).json({
    success: true,
    data: disease,
  });
});

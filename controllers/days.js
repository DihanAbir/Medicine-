const asycnHandler = require("../middleware/async");
const Days = require("../models/Days");
const Disease = require("../models/Disease");

//@desc add  a days with.diseaseid.
//@route POST  /api/v1/days/addADay/:diseaseid
//@access Public
exports.addADay = asycnHandler(async (req, res) => {
  const diseaseid = req.params.diseaseid;

  const { prescription, bill, due, pay } = req.body;
  //   console.log(req.body);

  // Create user
  const days = await Days.create({ prescription, bill, due, pay, diseaseid });

  const diseaseUser = await Disease.findById(diseaseid);
  console.log(`diseaseUser`, diseaseUser);
  diseaseUser.pay = diseaseUser.pay + pay;
  console.log(`diseaseUser.pay`, diseaseUser.pay);
  if (diseaseUser.pay > diseaseUser.bill) {
    return res.json({ message: "you pay more then bill" });
  }
  diseaseUser.due = diseaseUser.bill - diseaseUser.pay;

  await diseaseUser.save();
  console.log(`diseaseUser`, diseaseUser);

  res.status(200).json({
    success: true,
    data: days,
  });
});

//@desc   Get All Days by Disease
//@route  GET  /api/v1/days/:diseaseid
//@access Public
exports.getAlldaysByDisease = asycnHandler(async (req, res) => {
  const diseaseid = req.params.diseaseid;

  // Get days by disease
  const days = await Days.find({ diseaseid });

  try {
    res.status(200).json({
      success: true,
      data: days,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      Message: "there is no disease",
    });
  }
});

//@desc   Get All Days by Disease
//@route  GET  /api/v1/days/:diseaseid
//@access Public
exports.getAlldays = asycnHandler(async (req, res) => {
  // Get days by disease
  const days = await Days.find();

  try {
    res.status(200).json({
      total: days.length,
      success: true,
      data: days,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      Message: "there is no disease",
    });
  }
});

//@desc   update Days by DiseaseId
//@route  update  /api/v1/days/:DaysID
//@access Public
exports.updateDaysByDaysID = asycnHandler(async (req, res) => {
  const _id = req.params.DaysId;
  const { prescription, pay } = req.body;

  // Get days by disease
  const days = await Days.findById(_id);
  console.log(`days`, days);

  days.prescription = prescription || days.prescription;
  days.pay = pay || days.pay;

  days.save();

  try {
    res.status(200).json({
      success: true,
      data: days,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error,
    });
  }
});

//@desc   update Days by DiseaseId
//@route  update  /api/v1/days/:DaysID
//@access Public
exports.deleteDaysByDaysID = asycnHandler(async (req, res) => {
  const _id = req.params.DaysId;

  // Get days by disease
  const daysToUpdate = await Days.findById(_id);
  console.log(`daysToUpdate`, daysToUpdate.diseaseid);
  const id = daysToUpdate.diseaseid;

  // update bill korar jnne desis model k eikhane ana lagteceh
  const disease = await Disease.findById(id);
  disease.pay = disease.pay - daysToUpdate.pay;
  disease.due = disease.due + daysToUpdate.pay;
  disease.save();

  const days = await Days.findByIdAndDelete(_id);

  try {
    res.status(200).json({
      success: true,
      data: days,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "error.message",
    });
  }
});

//@desc Delete dropallUser
//@route DELETE  /api/v1/user/:phoneNumber
//@access Public
exports.dropallDays = asycnHandler(async (req, res) => {
  const Days = await Days.find();
  Days.deleteMany();
  try {
    res.status(200).json({
      success: true,
      Message: "All Data Deleted Successfully",
      data: Days,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      Message: "All Data Deleted failed",
    });
  }
});

const express = require("express");
const {
  addPatient,
  getAllUsers,
  getAUserbyid,
  getAUser,
  updateAUser,
  deleteAUser,
  dropallUser,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/profile/:id").get(getAUserbyid);
router.route("/addPatient").post(addPatient);
router.route("/:id").get(getAUser).put(updateAUser).delete(deleteAUser);
router.route("/dropDatabase").delete(dropallUser);

module.exports = router;

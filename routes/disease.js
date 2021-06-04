const express = require("express");
const {
  addADisease,
  updateADisease,
  getAllDisease,
  deleteADisease,
  getADisease,
  getAllTheDiseases,
} = require("../controllers/disease");

const router = express.Router();

router.route("/").get(getAllTheDiseases);
router.route("/:id").get(getADisease);
router.route("/user/:userId").get(getAllDisease);
router.route("/add/:userid").post(addADisease);
router.route("/update/:id").put(updateADisease);
router.route("/delete/:id").delete(deleteADisease);

module.exports = router;

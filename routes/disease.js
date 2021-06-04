const express = require("express");
const {
  addADisease,
  updateADisease,
  deleteADisease,
  getADisease,
} = require("../controllers/disease");

const router = express.Router();

router.route("/:id").get(getADisease);
router.route("/add").post(addADisease);
router.route("/update/:id").put(updateADisease);
router.route("/delete/:id").delete(deleteADisease);

module.exports = router;

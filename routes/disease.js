const express = require('express');
const {addADisease, updateADisease} = require('../controllers/disease');

const router = express.Router();


router.route('/add').post(addADisease)
router.route('/update/:id').put(updateADisease)
// router.route('/').get(getAllUsers)
// router.route('/:phone').get(getAUser).put(updateAUser).delete(deleteAUser)

module.exports = router;
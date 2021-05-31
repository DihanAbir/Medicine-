const express = require('express');
const {addPatient, getAllUsers, getAUser, updateAUser, deleteAUser} = require('../controllers/user');

const router = express.Router();


router.route('/').get(getAllUsers)
router.route('/addPatient').post(addPatient)
router.route('/:phone').get(getAUser).put(updateAUser).delete(deleteAUser)

module.exports = router;
const express = require('express');
const {addPatient, getAllUsers, getAUser} = require('../controllers/user');

const router = express.Router();


router.route('/addPatient').post(addPatient)
router.route('/').get(getAllUsers)
router.route('/:phone').get(getAUser)

module.exports = router;
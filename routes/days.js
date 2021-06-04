const express = require('express');
const { addADay , getAlldaysByDisease } = require('../controllers/days');

const router = express.Router();


router.route('/add/:diseaseid').post(addADay)
router.route('/:diseaseid').get(getAlldaysByDisease)

// router.route('/:id').get(getADisease)
// router.route('/update/:id').put(updateADisease)
// router.route('/delete/:id').delete(deleteADisease)


module.exports = router;
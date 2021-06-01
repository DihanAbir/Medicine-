const asycnHandler = require('../middleware/async');
const Days = require('../models/Days')


//@desc add  a days with.diseaseid.
//@route POST  /api/v1/days/addADay/:diseaseid
//@access Public
exports.addADay = asycnHandler( async(req,res)=>{
    const diseaseid = req.params.diseaseid;

    const { prescription, bill, due, pay} = req.body;
    console.log(req.body)

    // Create user 
    const days = await Days.create({prescription, bill, due, pay , diseaseid})

    res.status(200).json({
        success : true,
        data : days,
    })
})

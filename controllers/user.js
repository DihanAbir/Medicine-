const asycnHandler = require('../middleware/async');
const User = require('../models/User')


//@desc add  a patient
//@route POST  /api/v1/user/addPatient
//@access Public
exports.addPatient = asycnHandler( async(req,res)=>{
    const {name,phone, age, address, gender, bloodGroup } = req.body;
    console.log(req.body)

    // Create user 
    const user = await User.create({
        name,
        phone,
        age, 
        address,
        gender, 
        bloodGroup
    })

    res.status(200).json({
        success : true,
        data : user
    })

})



//@desc get all patients
//@route GET  /api/v1/user
//@access Public
exports.getAllUsers = asycnHandler( async(req,res)=>{
    const users = await User.find();
    console.log(`users`, users)
    if(!users) {
        res.status(200).json({
            data : "There is no user"
        })
    }
    res.status(200).json({
        success : true,
        count : users.length,
        data : users,
        
    })
})



//@desc get a user by phone number
//@route GET  /api/v1/user/:phoneNumber
//@access Public
exports.getAUser = asycnHandler( async(req,res)=>{
    const phone = req.params.phone;

    const user = await User.find({phone})

    if(!user) {
        res.status(200).json({
            data : "There is no user"
        })
    }
    res.status(200).json({
        success : true,
        data : user,
        
    })
})

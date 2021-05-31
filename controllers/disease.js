const asycnHandler = require('../middleware/async');
const Disease = require('../models/Disease')


//@desc add  a disease
//@route POST  /api/v1/disease/addDisease
//@access Public
exports.addADisease = asycnHandler( async(req,res)=>{
    const { title, bill, due, pay, treatment, treatmentPlan} = req.body;
    console.log(req.body)

    // Create user 
    const disease = await Disease.create({title, bill, due, pay, treatment, treatmentPlan})

    res.status(200).json({
        success : true,
        data : disease
    })
})


//@desc get A disease by id
//@route POST  /api/v1/disease/:id
//@access Public
exports.getADisease = asycnHandler( async(req,res)=>{
    const id = req.params.id ;
    console.log(`id`, id)
    // Create user 
    const disease = await Disease.findById(id);
    if(!disease){
        res.status(400).json({
            success : true,
            data : "There is no disease on this id."
        })
    }
    res.status(200).json({
        success : true,
        data : disease
    })
})


//@desc delete a Disease
//@route DELETE /api/v1/disease/updateDisease/:id
//@access Public
exports.deleteADisease = asycnHandler( async(req,res)=>{

    const id = req.params.id;
    // Create user 
    const disease = await Disease.findById(id);

    if(!disease){
        res.status(400).json({
            success : false,
            data : "there is no disease on this id."
        })
    }

    await disease.remove();

    res.status(200).json({
        success : true,
        data : {}
    })
})





//@desc update a Disease
//@route PUT  /api/v1/disease/updateDisease/:id
//@access Public
exports.updateADisease = asycnHandler( async(req,res)=>{
    const { title, bill, due, pay, treatment, treatmentPlan} = req.body;

    const id = req.params.id;
    // Create user 
    const disease = await Disease.findByIdAndUpdate(id, req.body,{
        new : true,
        runValidators : true
    })

    if(!disease){
        res.status(400).json({
            success : false,
            data : "there is no disease on this id."
        })
    }

    res.status(200).json({
        success : true,
        data : disease
    })
})


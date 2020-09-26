const express= require('express');
const router = express.Router();
// Handling Incoming get request
router.get('/', (req,res,next)=>{
    res.status(200).json({message:'Orders Fetched'});
});

router.post('/', (req,res,next)=>{
    res.status(201).json({message:'Order Get Created'});
});
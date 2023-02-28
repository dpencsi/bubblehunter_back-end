const express = require('express');
const Score = require('../models/model');
const router = express.Router();

//Post Method
router.post('/scores/save', async (req, res) => {
    const data = new Score({
        name: req.body.name,
        score: req.body.score
    });

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

//Get all Method
router.get('/scores/list', async (req, res) => {
    try{
        const data = await Score.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
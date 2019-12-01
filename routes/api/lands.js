/*const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

//const Case = require('../../models/Case');
const Land = require('../../models/Land');


// @route   GET api/lands
// @desc    Get All Lands
// @access  Public
router.get('/', (req, res) => {
    Land.find()
        .then(lands => res.json(lands));
        
});
/*
// @route   GET api/lands
// @desc    Get All Lands
// @access  Public
router.get('/:itemid', (req, res) => {
    
    Land.find( {item_id: req.params.itemid} )
    .populate('item_id')
    .then(lands => res.json(lands))
    .catch(err => res.status(404).json( {success: false} )); //id not found
});
*/

// @route   POST api/lands
// @desc    Create a Post
// @access  Public
/*
router.post('/', upload.single('purchaseAgreement'), (req, res) => {
    console.log(req.file);
    const newLand = new Land({
        purchaseAgreement: req.file.path,
        guideform: req.file.path,
        projectPF: req.file.path,
        environmentalReview: req.file.path,
    });

    newLand.save().then(land => res.json(land)); //saves to db
});

module.exports = router;*/
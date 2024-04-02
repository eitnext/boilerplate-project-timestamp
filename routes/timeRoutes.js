const express = require('express');
const timeController = require('../controllers/timeController');

const router = express.Router();

router.route('/:date').get(timeController.getTStamp);
router.route('/').get(timeController.getDefault);

module.exports = router;
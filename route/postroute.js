const express = require('express');
const router = express.Router()
const bodyparse = require('body-parser');
const cors = require('cors');
const controller = require('../controllers/controller');

//middlewares
router.use(bodyparse.json());
router.use(cors());



router.post('/postdescription', controller.postdescription);


module.exports = router;
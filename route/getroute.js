const express = require('express');
const router = express.Router()
const bodyparse = require('body-parser');
const cors = require('cors');
const controller = require('../controllers/controller');
const posts = require('../controllers/err&renderingcontrollers');

//middlewares
router.use(bodyparse.json());
router.use(cors());

router.get('/socialapp', posts.rendering)

router.get('/getposts',controller.getposts)
 




module.exports = router;
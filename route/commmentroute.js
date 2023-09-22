const express = require('express');
const router = express.Router()
const bodyparse = require('body-parser');
const cors = require('cors');
const controller = require('../controllers/controller');


//middlewares
router.use(bodyparse.json());
router.use(cors());


router.get('/getcomments', controller.getcomment)





router.post('/postcomments', controller.postcomment);





module.exports = router;
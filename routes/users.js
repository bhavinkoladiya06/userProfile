var express = require('express');
var router = express.Router();
var user=require('../controller/userController')

/* create users account API. */
router.post('/createProfile',user.createProfile)

/* login users account API. */
router.get('/getProfile',user.getUser)


/* Delete users account API. */
router.delete('/deleteProfile/:id',user.deleteUser)
router.put('/updateProfile/:id',user.updateProfile)

module.exports = router;

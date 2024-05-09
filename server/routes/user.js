const express = require('express')
const { register } = require('../controllers/userController')
const router = express.Router()

// http://localhost:4000/user/register POST
router.route('/register').post(register)

module.exports = router
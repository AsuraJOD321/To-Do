const express = require('express');
const { userRegister, userLogin, homepage } = require('./controller');
const router = express.Router();
router.get('/',homepage)

.post("/register",userRegister)
.post("/login",userLogin)
module.exports = router
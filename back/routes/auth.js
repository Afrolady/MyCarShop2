const express=require("express");
const { registroUsuario } = require("../controllers/authController");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser)


module.exports= router


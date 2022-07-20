const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");

/**
 * @desc register new user
 * @route  POST /api/users
 * @access public 
 */
const registerUser = (req, res) => {
    res.json({msg: 'register user'})
}

/**
 * @desc    authenticate a user
 * @route  POST /api/users/login
 * @access public 
 */
const loginUser = (req, res) => {
    res.json({msg: 'login user'})
}

/**
 * @desc    get user data
 * @route  get /api/users/me
 * @access private 
 */
const getMe = (req, res) => {
    res.json({msg: 'get user data'})
}




module.exports = {
    registerUser,
    loginUser,
    getMe
}
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
    let token;
    console.log("checking token".blue)



    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            console.log(`Hellop ${token}`);

            // verify
            const decoded = jwt.verify(token, process.env.SECRET);

            // get user from token
            req.user = await User.findById(decoded.id).select('-password') // remove password hash from object
            next();
        } catch (error) {
            res.status(401);
            throw new Error(`not authenticated ${error}`)
        }
    }
    if(!token) {
        res.status(401);
        throw new Error("no token, not authenticated");
    }
})

module.exports = {
    protect
}
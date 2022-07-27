const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [ true, "please set a email" ],
    },
    email: {
        type: String,
        required: [ true, "please set an email" ],
        unique: true,
    },
    password: {
        type: String,
        required: [ true, "please set a password" ],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);
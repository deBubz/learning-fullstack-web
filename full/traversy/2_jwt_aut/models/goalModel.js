const mongoose = require("mongoose")

const GoalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [ true, "please set a text value" ],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', GoalSchema);
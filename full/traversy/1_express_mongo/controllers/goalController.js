const asyncHandler = require("express-async-handler")

/**
 * @desc    get goals
 * @route   GET /api/goals 
 */
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: "get goals"});
});

/**
 * @desc    set goals
 * @route   POST /api/goals 
 */
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('add text field');
    }
    res.status(200).json({ msg: `post goals `});
});

/**
 * @desc    update goals
 * @route   PUT /api/goals 
 */
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: "update goals"});
});

/**
 * @desc    delete goals
 * @route   DELETE /api/goals 
 */
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: "delete goals"});
});


module.exports = {
    getGoals,
    updateGoals,
    setGoals,
    deleteGoals
}
const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalModel");

/**
 * @desc    get goals
 * @route   GET /api/goals 
 */
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json({ goals: goals,  msg: "get goals"});
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

    const newGoal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json({ goal: newGoal, msg: `post goals `});
});

/**
 * @desc    update goals
 * @route   PUT /api/goals 
 */
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(
        req.param.id,
        req.body,
        { new: false }
    );
    res.status(200).json({ goal: updatedGoal, msg: "update goals"});
}); // this is not updating, its inserting

/**
 * @desc    delete goals
 * @route   DELETE /api/goals 
 */
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }

    await goal.remove();
    res.status(200).json({ msg: "delete goals"});
});


module.exports = {
    getGoals,
    updateGoals,
    setGoals,
    deleteGoals
}
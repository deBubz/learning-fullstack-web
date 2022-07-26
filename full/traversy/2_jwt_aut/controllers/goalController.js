const asyncHandler = require("express-async-handler")

const user = require('../models/userModel');
const Goal = require("../models/goalModel");

/**
 * @desc    get goals
 * @route   GET /api/goals 
 */
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    console.log(`Get all goals`.green);
    res.status(200).json({ goals: goals,  msg: "get goals"});
});

/**
 * @desc    set goals
 * @route   POST /api/goals 
 * @access  private
 */
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('add text field');
    }

    const newGoal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    console.log(`NewGoalCreated`.green);
    res.status(200).json({ goal: newGoal, msg: `post goals `});
});

/**
 * @desc    update goals
 * @route   PUT /api/goals 
 * @access  private
 */
const updateGoals = asyncHandler(async (req, res) => {
    console.log(`updating ${req.params.id}`.green)
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }

    // check for user
    if(!req.user) {
        res.status(401);
        throw new Error('user not found');
    }

    // match logged in user with the goal's user
    if(goal.user.toString() !== req.user.id) {
        req.status(401)
        throw new Error("User not authorized");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(
        req.params.id,
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

    // check for user
    if(!req.user) {
        res.status(401);
        throw new Error('user not found');
    }

    if(goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('user not authorized')
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
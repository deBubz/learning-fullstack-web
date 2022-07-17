/**
 * @desc    get goals
 * @route   GET /api/goals 
 */
const getGoals = (req, res) => {
    res.status(200).json({ msg: "get goals"});
}

/**
 * @desc    set goals
 * @route   POST /api/goals 
 */
const createGoals = (req, res) => {
    res.status(200).json({ msg: "post goals"});
}

/**
 * @desc    update goals
 * @route   PUT /api/goals 
 */
const updateGoals = (req, res) => {
    res.status(200).json({ msg: "update goals"});
}

/**
 * @desc    delete goals
 * @route   DELETE /api/goals 
 */
const deleteGoals = (req, res) => {
    res.status(200).json({ msg: "delete goals"});
}


module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals,
}
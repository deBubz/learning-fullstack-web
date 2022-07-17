const express = require('express');
const router = express.Router();

const {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
} = require('../controllers/goalController')

// GET: /api/goals
router.get('/', getGoals);

// POST: /api/goals
router.post('/', createGoals)

// put: /api/goals
router.put('/:id', updateGoals)

// GET: /api/goals
router.delete('/:id', deleteGoals)

// shorthand api calls for same routes
/*
router.route('/').get(getGoals).post(createGoals)
*/

module.exports = router;
const express = require('express');
const router = express.Router();

const {
    getGoals,
    createGoals,
    deleteGoals,
    setGoals
} = require('../controllers/goalController')

// GET: /api/goals
router.get('/', getGoals);

// POST: /api/goals
router.post('/', setGoals)

// put: /api/goals
router.put('/:id', setGoals)

// GET: /api/goals
router.delete('/:id', deleteGoals)

// shorthand api calls for same routes
/*
router.route('/').get(getGoals).post(createGoals)
*/

module.exports = router;
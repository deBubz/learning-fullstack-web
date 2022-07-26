const express = require('express');
const router = express.Router();

const {
    getGoals,
    deleteGoals,
    setGoals,
    updateGoals
} = require('../controllers/goalController')

const { protect } = require("../middleware/authMiddleware")

router.get('/', protect, getGoals);             // GET: /api/goals
router.post('/', protect, setGoals);            // POST: /api/goals
router.put('/:id', protect, updateGoals);       // put: /api/goals
router.delete('/:id', protect, deleteGoals);    // delete: /api/goals

// shorthand api calls for same routes
/*
router.route('/').get(getGoals).post(createGoals)
*/

module.exports = router;
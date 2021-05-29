const router = require('express').Router();

const { 
	addThought,
	getAllThoughts,
	getThoughtById,
	deleteThought
} = require('../controllers/thought-controller');

router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtById).delete(deleteThought);
router.route('/:userId').post(addThought);

module.exports = router;
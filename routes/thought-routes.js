const router = require('express').Router();

const { 
	addThought,
	getAllThoughts,
	getThoughtById,
	updateThought,
	deleteThought
} = require('../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(addThought);
router.route('/:id').get(getThoughtById).put(updateThought);
router.route('/:userId/:thoughtId').delete(deleteThought);
// router.route('/:thoughtId/reaction').post(addReaction);

module.exports = router;
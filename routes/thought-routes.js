const router = require('express').Router();

const { 
	addThought,
	getAllThoughts,
	getThoughtById,
	updateThought,
	deleteThought,
	addReaction,
	deleteReaction
} = require('../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(addThought);
router.route('/:id').get(getThoughtById).put(updateThought);
router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);
router.route('/:thoughtId').post(addReaction);
router.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
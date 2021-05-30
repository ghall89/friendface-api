const router = require('express').Router();

const { 
	addThought,
	getAllThoughts,
	getThoughtById,
	updateThought,
	deleteThought
} = require('../controllers/thought-controller');

router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtById).put(updateThought);
router.route('/:userId').post(addThought);
router.route('/:userId/:thoughtId').delete(deleteThought);

module.exports = router;
const router = require('express').Router();

const { 
	addUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser
} = require('../controllers/user-controller');

router.route('/').post(addUser).get(getAllUsers);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

module.exports = router;
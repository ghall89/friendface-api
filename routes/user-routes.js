const router = require('express').Router();

const { 
	addUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
	addFriend,
	removeFriend
} = require('../controllers/user-controller');

router.route('/').post(addUser).get(getAllUsers);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
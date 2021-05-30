const { User, Thought } = require('../models');

const userController = {
	// add user to collection
	addUser({ params, body }, res) {
		User.create(body)
		.then(dbUserData => res.json(dbUserData))
		.catch(err => res.status(400).json(err));
	},
	// get all users in collection
	getAllUsers(req, res) {
		User.find({})
		.then(dbUserData => res.json(dbUserData))
		.catch(err => res.status(400).json(err));
	},
	// get a single user by id
	getUserById({ params }, res) {
		User.findOne({ _id: params.id})
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({message: 'No user with this ID exists!'})
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => res.status(400).json(err));
	},
	// update a user by id
	updateUser({ params, body }, res) {
		User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({message: 'No user with this ID exists!'})
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => res.status(400).json(err));
	},
	// delete a user by id
	deleteUser({ params }, res) {
		User.findOneAndDelete({ _id: params.id })
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({message: 'No user with this ID exists!'})
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => res.status(400).json(err));
	},
	// add another user as a friend
	addFriend({ params }, res) {
		User.findOneAndUpdate(
			{ _id: params.userId }, 
			{ $push: { friends : params.friendId } },
			{ new: true }
		)
		.then(dbFriendData => {
			res.json(dbFriendData);
		})
		.catch(err => res.status(400).json(err));
	},
	// remove a friend
	removeFriend({ params }, res) {
		User.findOneAndUpdate(
			{ _id: params.userId }, 
			{ $pull: { friends : params.friendId } },
			{ new: true }
		)
		.then(dbFriendData => {
			res.json(dbFriendData);
		})
		.catch(err => res.status(400).json(err));
	}

}

module.exports = userController;
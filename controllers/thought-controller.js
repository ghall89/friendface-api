const { User, Thought } = require('../models');

const thoughtController = {
	// add a thought to the collection and to a designated user
	addThought({ params, body }, res) {
		Thought.create(body)
		.then(({ _id }) => {
			return User.findOneAndUpdate(
				{ _id: params.userId },
				{ $push: { thoughts: _id } },
				{ new: true }
			);
		})
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({message: 'No user with this ID exists!'})
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => res.status(400).json(err));
	},
	// get all thoughts
	getAllThoughts(req, res) {
		Thought.find({})
		.then(dbThoughtData => res.json(dbThoughtData))
		.catch(err => res.status(400).json(err));
	},
	// get a single thought by id
	getThoughtById({ params }, res) {
		Thought.findOne({ _id: params.id})
		.then(dbThoughtData => {
			if (!dbThoughtData) {
				res.status(404).json({message: 'No thought with this ID exists!'})
				return;
			}
			res.json(dbThoughtData);
		})
		.catch(err => res.status(400).json(err));
	},
	// delete a thought by id
	deleteThought({ params }, res) {
		Thought.findOneAndDelete({ _id: params.id })
		.then(dbThoughtData => {
			if (!dbThoughtData) {
				res.status(404).json({message: 'No thought with this ID exists!'})
				return;
			}
			res.json(dbThoughtData);
		})
		.catch(err => res.status(400).json(err));
	}
}

module.exports = thoughtController;
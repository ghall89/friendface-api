const { Schema, model, Types } = require('mongoose');

const moment = require('moment');

const ReactionSchema = new Schema (
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId()
		},
		reactionText: {
			type: String,
			required: 'Thought must contain text!',
			minlength: 1,
			maxlength: 280
		},
		createdAt: {
			type: String,
			default: moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a")
		},
		username: {
			type: String,
			required: 'Thought must contain username!'
		}
	}
);

const ThoughtSchema = new Schema (
	{
		thoughtText: {
			type: String,
			required: 'Thought must contain text!',
			minlength: 1,
			maxlength: 280
		},
		createdAt: {
			type: String,
			default: moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a")
		},
		username: {
			type: String,
			required: 'Thought must contain username!'
		},
		reactions: [ReactionSchema]
	}
);

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;
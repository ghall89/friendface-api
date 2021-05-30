const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema (
	{
		thoughtText: {
			type: String,
			required: 'Thought must contain text!',
			minlength: 1,
			maxlength: 280
		},
		createdAt: {
			type: Date,
			default: Date.now()
		},
		reactions:[
			{
				type: Schema.Types.ObjectId,
				ref: 'Reaction'
			}
		]
	}
);

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;
// const { Schema, model, Types } = require('mongoose');
// 
// const ThoughtSchema = new Schema (
// 	{
// 		type: String,
// 		required: 'Thought must contain text!',
// 		minlength: 1,
// 		maxlength: 280
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: Date.now();
// 	},
// 	username: {
// 		type: Schema.Types.ObjectId,
// 		ref: 'User'
// 	},
// 	reactions:[
// 		{
// 			type: Schema.Types.ObjectId,
// 			ref: 'Reactions'
// 		}
// 	]
// );
// 
// const Thought = model('Thought', ThoughtSchema);
// module.exports = Thought;
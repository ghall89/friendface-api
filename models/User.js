const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema (
	{
		username: {
			type: String,
			unique: true,
			required: 'Must provide a username!',
			trim: true
		},
		email: {
			type: String,
			unique: true,
			required: 'Must provide a email!',
			validate: {
				validator: function(v) {
					return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
				},
				message: props => 'Must enter a valid email!'
			}
		},
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Thoughts'
			}
		],
		friends: [			
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		],
	},
	{
		toJSON: {
			virtuals: true
		},
		id: false
	}
);

UserSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

const User = model('User', UserSchema);
module.exports = User;
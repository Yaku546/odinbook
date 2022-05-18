const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
	{
		content: {type: String, required: true},
		author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
		post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
		date: {type: Date, default: Date.now},
		likes: {type: Array},
	}
)

module.exports = mongoose.model('Comment', CommentSchema);
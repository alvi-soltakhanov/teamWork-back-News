const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    text: String,
    newsId: {
        ref: 'News',
        type: mongoose.Schema.Types.ObjectId,
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
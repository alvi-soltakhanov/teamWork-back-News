const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: String,
    text: String,
    categoryId: {
        ref: 'Category',
        type: mongoose.Schema.Types.ObjectId,
    }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
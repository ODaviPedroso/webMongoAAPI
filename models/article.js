const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    kb_title: String,
    kb_body: String,
    kb_permalink: String,
    kb_keywords: String,
    kb_liked_count: {
        type: Number,
        default: 0 
    },
    kb_disliked_count: {
        type: Number,
        default: 0 
    },
    kb_published: Boolean,
    kb_suggestion: Boolean,
    kb_featured: Boolean,
    kb_author_email: String,
    kb_published_date: Date
});


module.exports = mongoose.model('Article', articleSchema);

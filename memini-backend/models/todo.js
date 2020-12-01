var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title cannot be blank!'
    },
    listId: {
        type: Number,
        default: 0
    },
    category: {
        type: Number,
        default: 0, 
    },
    selected: {
        type: Boolean,
        default: false
    },
    completed: { // todo remove
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
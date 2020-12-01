var mongoose = require('mongoose');
mongoose.set('debug', true);

// 'mongodb://localhost/todo-api'
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useMongoClient: true});

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log("Connected to Mongoose"))

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
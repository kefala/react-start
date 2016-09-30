var Project = require('./Project');
var User = require('./User');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
	name: { type: String, required: true },
	project: [Project],
	user: [User],
	created_at: { type: Date, required: true }
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
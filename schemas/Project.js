var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	name: { type: String, required: true },
	created_at: { type: Date, required: true }
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
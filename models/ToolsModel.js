var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ToolsSchema = new Schema({
  id: {type: Number},
  title: {type: String, required:true},
  link: {type: String, required:true},
	description: {type: String, required:true},
  tags: {type: Array, required:false}
});
module.exports = mongoose.model("Tools", ToolsSchema);

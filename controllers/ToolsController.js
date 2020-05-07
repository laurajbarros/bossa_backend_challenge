const Tools = require("../models/ToolsModel");
const { body,validationResult } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
var mongoose = require("mongoose");

// Tools Schema
function ToolsData(data) {
	this.title= data.title;
	this.link = data.description;
	this.description = data.description;
	this.tags = data.tags;
	this.id = data._id
};

exports.listTools = [
	function (req, res) {
		try {
			Tools.find(req.query).then((tools)=>{
				if(tools.length > 0){
					return apiResponse.successResponseWithData(res, "Operation completed with success", tools);
				}else{
					return apiResponse.successResponseWithData(res, "Operation completed with success", "0 tools in storage");
				}
			});
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	}
];

exports.getToolById = [
	function (req, res) {
		try {
			console.log(req.params)
			Tools.find(req.query).then((tools)=>{
				if(tools.length > 0){
					return apiResponse.successResponseWithData(res, "Operation completed with success", tools);
				}else{
					return apiResponse.successResponseWithData(res, "Operation completed with success", "0 tools in storage");
				}
			});
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	}
];

exports.createTool = [
  body("title", "Title doesnt exist").isLength({ min: 1 }).trim().custom((value,{req}) => {
		return Tools.findOne({title : value}).then(tool => {
			if (tool) {
				return Promise.reject("Tool already exists with this Title");
			}
		});
	}),
  body("link", "Link doenst exist").isLength({ min: 1 }).trim().isURL(),
	body("description", "Description doesnt exist").isLength({ min: 1 }).trim(),
	(req, res) => {
		try {
			const errors = validationResult(req);
			var tool = new Tools({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        tags: req.body.tags,
      });
			if (!errors.isEmpty()) {
				return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
			}
			else {
				//Save tool.
				tool.save(function (err, data) {
					if (err) { return apiResponse.ErrorResponse(res, err); }
					let toolData = new ToolsData(data);
					return apiResponse.successResponseCreated(res,"New Tool added with Success.", toolData);
				});
			}
		} catch (err) {
			console.log('err');
			console.log(err);
			return apiResponse.ErrorResponse(res, err);
		}
	}
];

exports.deleteTool = [
	(req, res) => {
		try {
			Tools.findById(req.params.id, function (err, foundTool) {
				if(foundTool === null){
					return apiResponse.notFoundResponse(res,"There is no tool with this id");
				} else {
					Tools.findOneAndDelete({_id:req.params.id},function (err) {
						if (err) {
							return apiResponse.ErrorResponse(res, err);
						}else{
							return apiResponse.successResponseNoContent(res);
						}
					});
				}
			});
		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}

	}
];

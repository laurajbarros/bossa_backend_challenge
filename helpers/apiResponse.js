exports.successResponseWithData= function (res, msg, data) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

exports.successResponseCreated = function (res, msg, data) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(201).json(resData);
};

exports.successResponseNoContent = function (res) {
	return res.status(204).json();
};

exports.ErrorResponse = function (res, msg) {
  console.log(msg);
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(500).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.notFoundResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(404).json(data);
};

const httpStatus = require('http-status');
const DeviceService = require('./device.service');
const logger = require('../../utils/logger')(__filename);

const getDevices = async (req, res, next) => {
	try {
		const param = {};
		param.offset = req.query.offset ? Math.max(0, req.query.offset) : 0;
		param.limit = req.query.limit ? Math.max(0, req.query.limit) : 100000;
		const response = await DeviceService.get_devices(param);
		if (response.status == 200) {
			return res.status(httpStatus.OK).json(response);
		} else {
			return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(response);
		}
	} catch (e) {
		next(e);
	}
};

const saveDevice = async (req, res, next) => {
	try {
		const response = await DeviceService.save_device(req.body);
		if (response.status == 200) {
			return res.status(httpStatus.OK).json(response);
		} else {
			return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(response);
		}
	} catch (err) {
		next(err);
	}
};

const getDeviceById = async (req, res, next) => {
	try {
		const response = await DeviceService.get_device(req.params);
		if (response.status == 200) {
			return res.status(httpStatus.OK).json(response);
		} else {
			return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(response);
		}
	} catch (e) {
		next(e);
	}
};
const updateDevice = async (req, res, next) => {
	try {
		req.body.updated_at = new Date();
		const response = await DeviceService.update_device(req.body);
		if (response.status == 200) {
			return res.status(httpStatus.OK).json(response);
		} else {
			return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(response);
		}
	} catch (err) {
		next(err);
	}
};
const actionDevice = async (req, res, next) => {
	try {
		req.body.updated_at = new Date();
		const response = await DeviceService.update_device(req.body);
		if (response.status == 200) {
			logger.info("device status changed to ",response.data.status)
			response.message=`device status changed to ${response.data.status}`
			return res.status(httpStatus.OK).json(response);
		} else {
			return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(response);
		}
	} catch (err) {
		next(err);
	}
};
const deleteDevice = async (req, res, next) => {
	try {
		const response = await DeviceService.delete_device(req.body);
		if (response.status == 200) return res.status(httpStatus.OK).json(response);
		else if (response.status == 401) return res.status(httpStatus.BAD_REQUEST).json(response);
		else return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(response);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getDevices,
	saveDevice,
	getDeviceById,
	updateDevice,
	actionDevice,
	deleteDevice,
};

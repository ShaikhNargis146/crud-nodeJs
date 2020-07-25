const Joi = require('joi');

module.exports = {
	// POST /v1/device/create
	save_device: {
		body: {
			name: Joi.string().required(),
			device_code: Joi.string().required(),
			model: Joi.string().required(),
		},
		query: {},
		param: {},
	},

	//GET /v1/device/all?offset=0&limit=10
	get_devices: {
		param: {},
		query: {
			offset: Joi.number().optional(),
			limit: Joi.number().optional(),
		},
		body: {},
	},

	//GET /v1/device/get/:id
	get_device: {
		param: {
			id: Joi.number().required(),
		},
		query: {},
		body: {},
	},

	//PUT /v1/device/edit
	edit_device: {
		body: {
			id: Joi.number().required(),
			name: Joi.string().optional(),
			device_code: Joi.string().optional(),
			model: Joi.string().optional(),
		},
		query: {},
		param: {},
	},
	action_device: {
		body: {
			id: Joi.number().required(),
			status: Joi.string().required()
		},
		query: {},
		param: {},
	},

	//PUT /v1/device/delete
	remove_device: {
		body: {
			id: Joi.number().required(),
		},
		query: {},
		param: {},
	},
};
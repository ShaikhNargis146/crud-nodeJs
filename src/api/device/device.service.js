const db_store = require('../../utils/postgres_store');
const response_handler = require('../../middlewares/response_handler');
const logger = require('../../utils/logger')(__filename);

class DeviceService {
	static save_device = async (data) => {
		try {
			const columns = Object.keys(data);
			const params = {
				table: 'devices',
				clause: `name='${data.name}' AND isactive=true`,
				columns: columns,
				values: data,
			};
			const valOne = await db_store.queryfetch(params);
			console.log('valOne--', valOne);
			if (valOne && valOne.data[0]) {
				return response_handler.invalid({
					message: 'Device Already Exists!',
				});
			} else {
				const response = await db_store.saveOne(params);
				if (response && response.id)
					return response_handler.success({
						id: response.id,
					});
				else
					return response_handler.invalid({
						message: 'Incorrect Data !',
					});
			}
		} catch (err) {
			console.log(err);
			logger.info('error occurred in save_device');
			logger.error('error in save_device', err);
			return response_handler.errorHandler('Internal_Server_Error');
		}
	};
	static get_devices = async (param) => {
		try {
			let data = {
				table: 'devices',
				clause: `isactive=true`,
			};
			const response = await db_store.getAll(data, param);
			if (response)
				return response_handler.success({
					list: response.data,
					total_count: response.count.count,
				});
			else
				return response_handler.invalid({
					message: 'Incorrect Data !',
				});
		} catch (err) {
			logger.info('error occurred in get_languages');
			logger.error('error in get_languages', err);
			return response_handler.errorHandler('Internal_Server_Error');
		}
	};
	static get_device = async (param) => {
		try {
			const data = {
				table: 'devices',
				clause: `id=${param.id} and isactive=true`,
			};
			const response = await db_store.getOne(data);
			if (response && response.data) return response_handler.success(response.data);
			else
				return response_handler.invalid({
					message: 'Incorrect Data !',
				});
		} catch (err) {
			console.log(err);
			logger.info('error occurred in get_language');
			logger.error('error in get_language', err);
			return response_handler.errorHandler('Internal_Server_Error');
		}
	};
	static update_device = async (data) => {
		try {
			const dataSingle = data;
			const columns = Object.keys(dataSingle).map((k) => {
				return k;
			});
			const params = {
				clause: `id=${parseInt(data.id)}`,
				table: 'devices',
				columns: columns,
			};
			const response = await db_store.update(dataSingle, params);
			console.log("res---",response)
			if (response && !response.error) return response_handler.success(response);
			else
				return response_handler.invalid({
					message: 'Incorrect Data !',
				});
		} catch (error) {
			console.log(error);
			logger.info('error occurred in update_device');
			logger.error('error in update_device', error);
			return response_handler.errorHandler('Internal_Server_Error');
		}
	};
	static delete_device = async (data) => {
		try {
			data.isactive = 'false';
			const dataSingle = data;
			const columns = Object.keys(dataSingle).map((k) => {
				return k;
			});
			const params = {
				clause: `id=${parseInt(data.id)}`,
				table: 'devices',
				columns: columns,
			};
			const response = await db_store.update(dataSingle, params);
			if (response) return response_handler.success(response);
			else
				return response_handler.invalid({
					message: 'Incorrect Data !',
				});
		} catch (error) {
			console.log(error);
			logger.info('error occurred in update_device');
			logger.error('error in update_device', error);
			return response_handler.errorHandler('Internal_Server_Error');
		}
	};
}

module.exports = DeviceService;

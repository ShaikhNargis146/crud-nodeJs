const db = require('../config/postgres.config');
const pgp = require('pg-promise')({
	capSQL: true,
});

const save = async (params) => {
	try {
		console.log('columns', params.columns);
		const cs = new pgp.helpers.ColumnSet(params.columns, {
			table: params.table,
		});
		const response = await db.one(pgp.helpers.insert(params.values, cs) + 'RETURNING *');
		// console.log('response---', response);
		return response;
	} catch (error) {
		console.log('error---inside save ', error);
		let response = {
			error,
		};
		return response;
	}
};
const update = async (dataSingle, param) => {
	try {
		console.log(dataSingle);
		const condition = dataSingle.id
			? pgp.as.format(' WHERE id = ${id}', dataSingle)
			: pgp.as.format(' WHERE mobile = ${mobile}', dataSingle);
		const response = await db.one(
			pgp.helpers.update(dataSingle, param.columns, param.table) + condition + 'RETURNING *'
		);
		// console.log('response---', response);
		return response;
	} catch (error) {
		console.log('error---inside update ', error);
		let response = {
			error,
		};
		return response;
	}
};
const queryfetch = async (data) => {
	let response = {};
	try {
		if (data && data.table && data.clause) {
			const query = `SELECT * FROM ${data.table} WHERE ${data.clause}`;
			console.log('query', query);
			response.data = await db.any(`SELECT * FROM ${data.table} WHERE ${data.clause}`);
		} else if (data && data.query) {
			const query = data.query;
			console.log('query-----update', query);
			response.data = await db.any(query);
		}
		// console.log('response---', response);
		return response;
	} catch (error) {
		console.log('error---inside queryfetch ', data, error);
		response.error = error;
		return response;
	}
};
const getOne = async (data) => {
	let response = {};
	try {
		console.log('data', data);
		if (data && data.table && data.id) {
			response.data = await db.one(`SELECT * FROM ${data.table} WHERE id=$1`, data.id);
		} else if (data && data.table && data.clause) {
			const query = `SELECT * FROM ${data.table} WHERE ${data.clause}`;
			console.log('query', query);
			response.data = await db.one(`SELECT * FROM ${data.table} WHERE ${data.clause}`);
		}
		// console.log('response---', response);
		return response;
	} catch (error) {
		console.log('error---inside getOne ', error);
		response.error = error;
		return response;
	}
};
const getAll = async (data, param) => {
	let response = {};
	try {
		// let count;
		if (data && data.table && data.clause && data.order) {
			response.data = await db.any(
				`SELECT * FROM ${data.table} WHERE ${data.clause} ORDER BY ${data.order} LIMIT $1 OFFSET $2`,
				[param.limit, param.offset]
			);
			response.count = await db.one(`SELECT COUNT(*) FROM ${data.table} WHERE is_active=true`);
		} else if (data && data.table && data.clause && !param.limit && !param.offset) {
			response.data = await db.any(`SELECT * FROM ${data.table} WHERE ${data.clause} ORDER BY created_at DESC`);
			response.count = await db.one(`SELECT COUNT(*) FROM ${data.table} WHERE ${data.clause}`);
		} else if (data && data.table && data.clause) {
			response.data = await db.any(
				`SELECT * FROM ${data.table} WHERE ${data.clause} ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
				[param.limit, param.offset]
			);
			response.count = await db.one(`SELECT COUNT(*) FROM ${data.table} WHERE ${data.clause}`);
		} else if (data && data.table) {
			response.data = await db.any(`SELECT * FROM ${data.table} ORDER BY created_at DESC LIMIT $1 OFFSET $2`, [
				param.limit,
				param.offset,
			]);
			response.count = await db.one(`SELECT COUNT(*) FROM ${data.table} WHERE is_active=true`);
		}
		return response;
	} catch (error) {
		console.log('error---inside getAll ', error);
		response.error = error;
		return response;
	}
};

module.exports.saveOne = save;
module.exports.getOne = getOne;
module.exports.getAll = getAll;
module.exports.update = update;
module.exports.queryfetch = queryfetch;

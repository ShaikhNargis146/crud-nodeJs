const logger = require('../utils/logger')(__filename);
const pgp = require('pg-promise')({});
const common = require('../constants/constants.common');

const db = pgp(common.database.uri);

const connection = db.connect();
connection
	.then((db) => {
		logger.info(`Successfully connected to ${common.database.uri} Postgres cluster in ${common.env} mode.`);
		return db;
	})
	.catch((err) => {
		if (err.message.code === 'ETIMEDOUT') {
			logger.info('Attempting to re-establish database connection.');
			mongoose.connect(common.database.uri);
		} else {
			logger.error('Error while attempting to connect to database:');
			logger.error(err);
		}
	});
module.exports = db;

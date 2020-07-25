const express = require('express');
// import all the routes here
const deviceRoutes = require('../../device/device.route');
const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => {
	// console.log('inside status');
	res.json({
		message: 'OK',
		timestamp: new Date().toISOString(),
		IP: req.ip,
		URL: req.originalUrl,
	});
});

router.use('/device', deviceRoutes);

module.exports = router;

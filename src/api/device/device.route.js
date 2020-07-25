const express = require('express');
const validate = require('express-validation');

const controller = require('./device.controller');
const validation = require('../../validations/device.validation');

const router = express.Router();

router.route('/all').get(validate(validation.get_devices), controller.getDevices);
router.route('/get/:id').get(validate(validation.get_device), controller.getDeviceById);
router.route('/create').post(validate(validation.save_device), controller.saveDevice);
router.route('/edit').put(validate(validation.edit_device), controller.updateDevice);
router.route('/action').put(validate(validation.action_device), controller.actionDevice);
router.route('/remove').put(validate(validation.remove_device), controller.deleteDevice);
module.exports = router;

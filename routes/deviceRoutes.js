const express = require('express');
const { createDevice, listDevices } = require('../controllers/deviceController');
const { authMiddleware, tenantMiddleware, roleMiddleware } = require('../middleware');

const router = express.Router();
router.use(authMiddleware, tenantMiddleware);
router.post('/', roleMiddleware('admin'), createDevice);
router.get('/', listDevices);
module.exports = router;

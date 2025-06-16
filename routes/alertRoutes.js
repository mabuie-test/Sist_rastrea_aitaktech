const express = require('express');
const { handleAlert } = require('../controllers/alertController');
const { authMiddleware, tenantMiddleware } = require('../middleware');

const router = express.Router();
// endpoint público do Arduino envia GEOFENCE_OUT/IN
router.get('/alert', handleAlert);

// histórico de alertas
router.get('/history', authMiddleware, tenantMiddleware, async (req, res) => {
  const Alert = require('../models/Alert');
  const alerts = await Alert.find({ tenantId: req.tenantId })
                            .sort({ timestamp: -1 })
                            .limit(100);
  res.json(alerts);
});
module.exports = router;

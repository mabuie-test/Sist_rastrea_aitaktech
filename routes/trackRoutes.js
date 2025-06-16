const express = require('express');
const { createTrack, getHistory } = require('../controllers/trackController');
const { authMiddleware, tenantMiddleware } = require('../middleware');

const router = express.Router();
// endpoint público para o rastreador
router.get('/track', createTrack);

// protegido para histórico
router.get('/history', authMiddleware, tenantMiddleware, getHistory);
module.exports = router;

const express = require('express');
const { createReport, getReports, getReportById, updateReport, deleteReport } = require('../controllers/reportController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.post('/', createReport);
router.get('/', getReports);
router.get('/:id', getReportById); // Nouvelle route pour obtenir un rapport par ID
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

module.exports = router;

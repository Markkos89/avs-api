const express = require('express');

const PatientQuestCtrl = require('../controllers/movie-ctrl');

const router = express.Router();

router.post('/consulta', PatientQuestCtrl.createPatientQuest);
router.put('/consulta/:id', PatientQuestCtrl.updatePatientQuest);
router.delete('/consulta/:id', PatientQuestCtrl.deletePatientQuest);
router.get('/consulta/:id', PatientQuestCtrl.getPatientQuestById);
router.get('/consultas', PatientQuestCtrl.getPatientQuests);

module.exports = router;

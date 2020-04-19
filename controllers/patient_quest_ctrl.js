const PatientQuest = require('../models/patient_quest_model');

createPatientQuest = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide user data',
        })
    }

    const quest = new PatientQuest(body);

    if (!quest) {
        return res.status(400).json({ success: false, error: err })
    }

    quest
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: quest._id,
                message: 'Patient quest created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Patient quest not created!',
            })
        })
};

updatePatientQuest = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    PatientQuest.findOne({ _id: req.params.id }, (err, quest) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'PatientQuest not found!',
            })
        }
        quest.name = body.name;
        quest.time = body.time;
        quest.rating = body.rating;
        quest
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: quest._id,
                    message: 'PatientQuest updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'PatientQuest not updated!',
                })
            })
    })
};

deletePatientQuest = async (req, res) => {
    await PatientQuest.findOneAndDelete({ _id: req.params.id }, (err, quest) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!quest) {
            return res
                .status(404)
                .json({ success: false, error: `PatientQuest not found` })
        }

        return res.status(200).json({ success: true, data: quest })
    }).catch(err => console.log(err))
};

getPatientQuestById = async (req, res) => {
    await PatientQuest.findOne({ _id: req.params.id }, (err, quest) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: quest })
    }).catch(err => console.log(err))
};

getPatientQuests = async (req, res) => {
    await PatientQuest.find({}, (err, quests) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!quests.length) {
            return res
                .status(404)
                .json({ success: false, error: `PatientQuest not found` })
        }
        return res.status(200).json({ success: true, data: quests })
    }).catch(err => console.log(err))
};

module.exports = {
    createPatientQuest,
    updatePatientQuest,
    deletePatientQuest,
    getPatientQuests,
    getPatientQuestById,
};

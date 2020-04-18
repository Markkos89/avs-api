const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientQuest = new Schema(
    {
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        email: { type: String, required: true },
        edad: { type: Number, required: true },
        sexo: { type: String, required: true },
        dni: { type: Number, required: true },
        tel: { type: String, required: true },
        consulta: { type: String, required: false },
        preg_medicas: {
                fiebre: { type: Boolean, required: true },
                tos: { type: Boolean, required: true },
                dolor_garganta: { type: Boolean, required: true },
                problema_respiracion: { type: Boolean, required: true },
                perdida_olfato: { type: Boolean, required: true },
                perdida_gusto: { type: Boolean, required: true },
        },
        nro_turno: { type: Number, required: true },
        activo: { type: Boolean, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('patient_quest', PatientQuest);

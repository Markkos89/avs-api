const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientQuest = new Schema(
    {
        nombreCompleto: { type: String, required: true },
        email: { type: String, required: true },
        edad: { type: String, required: true },
        sexo: { type: String, required: true },
        dni: { type: String, required: true },
        domicilio: { type: String, required: true },
        telefono: { type: String, required: true },
        consulta: { type: String, required: false },
        fiebre: { type: Boolean, required: false },
        tos: { type: Boolean, required: false },
        dolor_garganta: { type: Boolean, required: false },
        problema_respiracion: { type: Boolean, required: false },
        perdida_olfato: { type: Boolean, required: false },
        perdida_gusto: { type: Boolean, required: false },
        nro_turno: { type: Number, required: false, default: -1 },
        activo: { type: Boolean, required: false, default: false},
    },
    { timestamps: true },
);

module.exports = mongoose.model('Consulta', PatientQuest);

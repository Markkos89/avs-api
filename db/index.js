const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://admin:docQuestADM@cluster0-jxosw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

module.exports = db;

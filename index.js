require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');


const db = require('./db');
const movieRouter = require('./routes/doc_quest_router');

const app = express();
const apiPort = 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(), cors())
app.options('*', cors());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/zoom', (req, res) => {

    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(process.env.API_KEY + req.body.meetingNumber + timestamp + req.body.role).toString('base64');
    const hash = crypto.createHmac('sha256', process.env.API_SECRET).update(msg).digest('base64');
    const signature = Buffer.from(`${process.env.API_KEY}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`).toString('base64');

        res.json({
        signature: signature
    })
});

app.use('/api', movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

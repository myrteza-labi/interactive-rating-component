const path = require('path');
const envPath = path.resolve(__dirname, '.env');
require('dotenv').config({ path: envPath });
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const uri = process.env.URI;

app.get('/', (req, res) => {
    res.send(`Hello world from the server`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('Connected to mongodb Atlas');
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoURI = require('./config/keys').mongURI;

// Routes
const itemsRoute = require('./routes/api/items');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB Connection
mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

// Routes
app.use('/api/items', itemsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port '+port+'.'));
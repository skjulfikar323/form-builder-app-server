const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
//const cors = require('cors');
const userRoutes = require('./routes/auth');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
//app.use(cors());

db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

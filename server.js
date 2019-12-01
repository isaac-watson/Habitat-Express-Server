const express = require('express');
const mongoose = require('mongoose');
const cases = require('./routes/api/cases');
//const lands = require('./routes/api/lands');

const app = express();

//Body parser middleware
app.use(express.json());
app.use(require('cors')())

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

// Use routes
app.use('/uploads', express.static('uploads'));
app.use('/api/cases', cases);
//app.use('/api/lands', lands);

//Sets the port variable for the server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
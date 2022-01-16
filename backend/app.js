// Import express module
const express = require('express');

const mongoose = require('mongoose');

const path = require('path');

const courseRoute = require('./routes/course-route');
const trainerRoute = require('./routes/trainer-route');
const userRoute = require('./routes/user-route');

//Connection ;// avec : educationFinalDB : nom de database
mongoose.connect('mongodb://localhost:27017/educationFinalDB',
    { useNewUrlParser: true, useUnifiedTopology: true });


// Import body-parser module
const bodyParser = require('body-parser');

// Create express backend application
const app = express();

// Get and parse object from request 
app.use(bodyParser.urlencoded({ extended: true }));
// Make JSON object to send 
app.use(bodyParser.json());


// Security Configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

app.use("/images", express.static(path.join("backend/images")));

app.use('/api/courses', courseRoute);
app.use('/api/trainers', trainerRoute);
app.use('/api/users', userRoute);

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router
var users = require('./Routers/usersRoutes');
var categories = require('./Routers/categoriesRoutes');

// end
mongoose.connect(process.env.DB_LOCAL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to');
    }
});

app.use('/users/',users);
app.use('/categories/', categories);

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + process.env.PORT);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    next();
});

module.exports = app;

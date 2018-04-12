const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

var systeminfo = require('./systeminfo');
var weather = require('./getweather');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err){
            console.log('Unable to append server.log');
        }
    });

    next();
});

/* app.use((req, res, next) => {

    res.render("maintenance");

}); */

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => { 

    res.render('home', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome you stupid little fuck',
});
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About Page',

    });
});

app.get('/systeminfo', (req, res) => {

    var userSystemInfo = systeminfo.systeminfo();
    res.render('systeminfo', userSystemInfo);

});

app.get('/weather/', (req, res) => {

    res.render("weatherlanding");

});

app.post('/weather/', (req, res) => {

    var givenAddress = req.body.givenAddress;

    if (req.body.givenAddress === undefined) {
    givenAddress = "Schäringer Platz 6, München";
    }
    
    weather.getWeatherForAddress(givenAddress, (errorMessage, results) => {
        if (errorMessage){
            res.send("Error has occured");
        }
        else {
        res.render("weather", {temp: results.temp, appTemp: results.appTemp, formattedAddress: results.formattedAddress} , undefined);
        }
    });
});

app.get('/timeTracker', (req, res) => {

    res.render('timeTracker');

});

app.post('/timeTracker', (req, res) => {

    var timeEntry = {
        start: req.body.start,
        stop: req.body.stop,
        pause: req.body.pause
    };

    res.render('timeTracker');

});

app.get('/bad', (req, res) => {
    res.send({
    errorMessage: "Error handling request"
    });
});

app.listen(port, () => {
    console.log(`Server is up on Port ${port}`);
});
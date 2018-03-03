const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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
    
    //res.send('<h1>Hello Express</h1>');

/*     res.send({
    name: 'Jan',
    likes: [
        'Your Mom',
        'Travel'
    ]
}); */

res.render('home', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome you stupid little fuck',
})

});


app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About Page',

    });
});

app.get('/bad', (req, res) => {
    res.send({
    errorMessage: "Error handling request"
    });
});

app.listen(port, () => {
    console.log(`Server is up on Port ${port}`);
});
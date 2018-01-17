const express = require('express');
const hbs = require('hbs');

let app = express();


hbs.registerPartials(__dirname + '/views/partials' );

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('displayWelcomeMessage', (text) => {
    return text.toUpperCase();
});





app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use((res,req,next) =>{
    console.log("working...");
    let now = new Date().toString();

    console.log(`${now} ${res.method} ${res.path}`)

    next();
});



app.get('/',(req,res) => {
    res.render('home.hbs',{
        title:"Home Page",
        mainHeaging : "This is home Page",
        para:"home page is to help you",
        currentYear: new Date().getFullYear() 
    });
});

app.get('/about',(req,res) => {
    
    res.render('about.hbs',{
        title:"About Page",
        mainHeaging : "This is About Page",
        para:"about page is to help you",
        currentYear: new Date().getFullYear()  
    });

});
app.get('/bad',(req,res) => {
    let obj = {
        "errorMessage": "error occured"
    };

    res.send(obj);
});

app.listen('3000');
const express = require('express');
const app = express();
const hbs=require('hbs');
const port = process.env.PORT || 3000;
const path = require('path');
const template_path = path.join(__dirname, "../templates/views");

//template engine
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(path.join(__dirname, "../templates/partials"));


app.use(express.static('public'));

//routing
app.get("", (req,res) =>{
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about');
    });
app.get('/weather', (req, res) => {
    res.render('weather');    
    });
app.get('*', (req, res) => {
    res.render('404error', {
        errorMsg: 'Oops! Page Not Found'
        });
    });

 
 //server local host   
app.listen(port, () => {
    console.log('Example app listening on port 3000!');
    });
//I need to have express and invoke it as app per the documentation
const express = require('express');
const app = express();

const musiciansController = require('./controllers/musicians');

//This is setting up that ejs will be used in this project and it will be set
//to a directory named views. The directory has to be views
app.set('view engine', 'ejs');

//need to make sure i connect this to the CSS files
//and any DOM manipulation
app.use(express.static('public'));

//i wanna make sure that I can have a generic home route first
//but i also wanna have my musicians controller to be read before any
// any * or catch all

app.use('/musicians', musiciansController)

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/*', (req, res) => {
    res.render('404.ejs');
})

app.listen(4000, () => {
    console.log("listening on port 4000");
})
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

const data = {
    nombre: 'Edgar Rodríguez',
    titulo: 'Curso de NodeJS'
}

app.get('/', (req, res) => {
    res.render('home', data);
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });
app.get('/generic', (req, res) => {
    res.render('generic', data);
});

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });
app.get('/elements', (req, res) => {
    res.render('elements', data);
});

// app.get('*', (req, res) => {
//     //res.send('404 | Page not found');
//     res.sendFile(__dirname + '/public/404.html');
// })
app.get('*', (req, res) => {
    res.render('404', data);
})

app.listen(port, () => {
    console.log('Escuchando por el puerto', port);
})
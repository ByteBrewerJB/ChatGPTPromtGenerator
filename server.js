const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Stel de middleware in om de ingediende formuliergegevens te verwerken
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Stel de standaardweergave-motor in op EJS
app.set('view engine', 'ejs');

// Stel de openbare map in voor statische bestanden
app.use(express.static('public'));

// Start de server en luister op een specifieke poort
const port = 3000;
app.listen(port, () => {
  console.log(`De applicatie is gestart op http://localhost:${port}`);
});

// Stel een route in om het formulier te verwerken en de resulterende tekst te genereren
app.post('/result', (req, res) => {
    const color = req.body.color;
    const animal = req.body.animal;
  
    const text = `De geselecteerde kleur is ${color} en het gekozen dier zegt "${animal}"!`;
  
    res.render('result', { text: text });
  });
  // Stel een route in voor de startpagina
app.get('/', (req, res) => {
    res.render('index', { colors: require('./colors.json').colors, animals: require('./animals.json').animals });
  });
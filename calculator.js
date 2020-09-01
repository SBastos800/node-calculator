//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile('/bmiCalculator.html', {root: __dirname});
});


app.post('/', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight/(height*height);
    res.send('Your BMI is ' + bmi);
});

app.use((req, res) => {
    res.status(404).sendFile('./404.html', {root: __dirname});
});


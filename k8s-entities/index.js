const app = require('express')();
const bodyParser = require('body-parser');
const os = require('os');
const _ = require('lodash');

const PORT = process.env.PORT || 3000;
const words = process.env.WORDS;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`Served by ${os.hostname}`);
});

app.get('/word', (req, res) => {
    console.log('Using from words : ' + words);
    var word = _.sample(words.split(","));
    res.send({word});
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
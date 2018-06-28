const app = require('express')();
const bodyParser = require('body-parser');
const os = require('os');
const _ = require('lodash');
const request = require('async-request');
const propertiesreader = require('properties-reader');
const config = require('./config');

const ADJECTIVE = process.env.ADJECTIVE || config.ADJECTIVE;
const ARTICLE = process.env.ARTICLE || propertiesreader('./application-minikube.properties').get('ARTICLE');
const NOUN = process.env.NOUN || propertiesreader('./application-minikube.properties').get('NOUN');
const SUBJECT = process.env.SUBJECT || propertiesreader('./application-minikube.properties').get('SUBJECT');
const VERB = process.env.VERB || propertiesreader('./application-minikube.properties').get('VERB');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`Served by ${os.hostname}`);
});

app.get('/sentence', async (req, res) => {
    console.log('Constructing sentence' , ADJECTIVE);

    var adjectiveRes = await request(ADJECTIVE);
    var articleRes = await request(ARTICLE);
    var nounRes = await request(NOUN);
    var subjectRes = await request(SUBJECT);
    var verbRes = await request(VERB);
    
    res.send(JSON.parse(subjectRes.body).word + " "  +
    JSON.parse(verbRes.body).word + " " + 
    JSON.parse(articleRes.body).word + " "  + 
    JSON.parse(adjectiveRes.body).word + " " + 
    JSON.parse(nounRes.body).word);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});


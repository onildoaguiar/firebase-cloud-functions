const functions = require('firebase-functions');
const axios = require('axios');

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase Cloud Functions!");
});

exports.myPublicIP = functions.https.onRequest((request, response) => {
    axios.get('http://httpbin.org/ip')
        .then(result => response.send(`Your public is ${result.data.origin}.`))
        .catch(error => response.status(500).send(error))
});

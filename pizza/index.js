const connection = require('./cnn')

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

const app = express();

const PORT = 3000;
const endPoint = 'pizza_api';
const schema = {};

//Middlewares
app.use(endPoint, bodyParser.json(), graphqlExpress({
    schema
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: endPoint
}));

app.use(morgan('short'));

//Routes
app.get('/', (req, res) => {
    res.send('Funciona!');
});

app.get('/graphiql', (req, res) => {
    res.send('Funciona graphiql!');
});

//server

app.listen(PORT, () => {
    console.log('Server on port 3000');
});
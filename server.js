const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// parse application/json
app.use(bodyParser.json());


const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "test",
    port:5432,
    database: "caranea"
});


// Put all API endpoints under '/api'
app.post('/api/todo', (req, res) => {

    // callback - checkout a client
    pool.connect((err, client, done) => {
        if (err) throw err;

        // get row from users -> error checking
        client.query('SELECT * FROM todo', [], (err, db_res) => {
            done();
            if (err) {
                console.log(err.stack);
            }
            else {
                console.log();
                res.json(db_res.rows);
            }
        });
    });
});


// insert new weight
app.post('/api/weight/getDay', (req, res) => {

    const {date} = req.body;
    console.log('getDay fired for the following date', date);


    // callback - checkout a client
    pool.connect((err, client, done) => {
        if (err) throw err;

        // get row from users -> error checking
        client.query('select * from weight_history where entry_date=($1)', [date], (err, db_res) => {
            done();
            if (err) {
                console.log(err.stack);
            }
            else {
                console.log('values', db_res);
                res.json(db_res.rows);
            }
        });
    });
});

// insert new weight
app.post('/api/weight/insert', (req, res) => {

    console.log('fired', req.body);

    const {date, value} = req.body;

    // callback - checkout a client
    pool.connect((err, client, done) => {
        if (err) throw err;

        // get row from users -> error checking
        client.query('insert into weight_history (entry_date, entry_value) values ($1, $2)', [date,value], (err, db_res) => {
            done();
            if (err) {
                console.log(err.stack);
            }
            else {
                console.log('inserted', date, value);
                res.json(db_res.rows);
            }
        });
    });
});


// Put all API endpoints under '/api'
app.get('/api/weight/get', (req, res) => {

    // callback - checkout a client
    pool.connect((err, client, done) => {
        if (err) throw err;

        // get row from users -> error checking
        client.query('SELECT * FROM weight_history', [], (err, db_res) => {
            done();
            if (err) {
                console.log(err.stack);
            }
            else {
                console.log();
                res.json(db_res.rows);
            }
        });
    });
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`server listening on port ${port}`);
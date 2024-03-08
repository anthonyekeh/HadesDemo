const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
    host: '124.243.132.196',
    user: 'anthony',
    password: 'Huawei@1234##',
    database: 'users'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, age, email } = req.body;
    const newUser = { name, age, email };
    const sql = 'INSERT INTO login SET ?';

    db.query(sql, newUser, (err, result) => {
        if (err) {
            console.error('Error inserting user into database:', err);
            return res.status(500).send('An error occurred while processing your request.');
        }

        console.log('User added to database:', result);
        res.redirect('/');
    });
});


// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on port 3000`);
});

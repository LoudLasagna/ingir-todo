const express = require("express");
const dotenv = require('dotenv');
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const cors = require("cors");

const sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ingir-todo'
})
sqlConnection.connect()
sqlConnection.query('INSERT INTO `tasks`(`name`, `text`, `completed`) VALUES (\'test\',\'test\',\'0\')', (err, rows, fields) => {
    if (err) throw err

    console.log('error')
})

dotenv.config();

const app = express();
const corsOptions = {
    origin: false,
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
app.get('/get-tasks', (req, res) => {
    sqlConnection.query('SELECT * FROM `tasks`', (err, result, fields) => {
        res.send(result)
    })
})
app.post('/edit-task', (req, res) => {
    res.json({ ...req.body})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

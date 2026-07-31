const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS Roc8`;
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )`;

const db = mysql.createConnection({host: 'localhost',user: 'root',password: '',database: 'roc8'});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
    }
    console.log('MySQL connected...');
    db.query(createDatabaseQuery, (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            throw err;
        }
        console.log('Database created successfully...');

        db.query(createTableQuery, (err, result) => {
            if (err) {
                console.error('Error creating table:', err);
                throw err;
            }
            console.log('Table created successfully...');
        });
    });
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {user: 'its.bloody912@gmail.com',pass: 'txej qcuv yxmd bsrl'}
});

contactEmail.verify((error) => {
    if (error) console.log(error);
    else console.log("Ready to Send");
});

function generateOTP() {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) 
         OTP += digits[Math.floor(Math.random() * 10)];
    return OTP;
}

app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    const CHECK_EXISTENCE_QUERY = `SELECT * FROM users WHERE username='${username}' OR email='${email}'`;

    db.query(CHECK_EXISTENCE_QUERY, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error checking user existence.' });
            throw err;
        }
        if (result.length > 0) {
            res.status(409).send({ message: 'Username or email already exists.' });
        } else {
            const INSERT_USER_QUERY = `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`;
            db.query(INSERT_USER_QUERY, (err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Error saving user.' });
                    throw err;
                }
                res.status(200).send({ message: 'User saved successfully.' });
            });
        }
    });
});

const otpMap = new Map();
app.post('/sendOTP', (req, res) => {
    const { email } = req.body;
    const OTP = generateOTP();
    otpMap.set(email, OTP);
    const mailData = {
        from: 'its.bloody912@gmail.com', to: email,
        subject: 'OTP Verification', text: `Your OTP for verification is: ${OTP}`
    };

    contactEmail.sendMail(mailData, (error, info) => {
        if (error) res.status(500).send({ message: 'Error sending OTP.' });
        else res.status(200).send({ message: 'OTP sent successfully.' });
    
    });
});

app.post('/verifyOTP', (req, res) => {
    const { email, otp } = req.body;
    const storedOTP = otpMap.get(email);

    if (storedOTP === otp) {
        otpMap.delete(email); 
        res.status(200).send({ message: 'OTP verified successfully.' });
    } else {
        res.status(400).send({ message: 'Invalid OTP.' });
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const SELECT_USER_QUERY = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
    db.query(SELECT_USER_QUERY, (err, result) => {
        
        if (err) {
            res.status(500).send({ message: `Error logging in. ${email} ${req.body.email}` });
            throw err;
        }
        if (result.length === 1) {
            const user = result[0]
            if (user.password === password)  res.status(200).send({ message:'Login successful.'});
            else res.status(401).send({ message:'Invalid credentials.'});
        }
        else res.status(401).send({ message:'Invalid credentials.'});   
    });
});
app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const port = 5000;
const SECRET_KEY = 'Roc8'
const { faker } = require('@faker-js/faker')

app.use(cors());
app.use(bodyParser.json());

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    ) `

 const createTempQuery = `    
     CREATE TABLE IF NOT EXISTS temp (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )`;


const db = mysql.createConnection({host: 'localhost',user: 'root',password: '',database: 'Roc8'});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
    }
    console.log('MySQL connected...');

    db.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating table:', err);
            throw err;
        }
        console.log('user Table created successfully...');
    });

    db.query(createTempQuery, (err, result) => {
        if (err) {
            console.error('Error creating table:', err);
            throw err;
        }
        console.log('Temp Table created successfully...');
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
    for (let i = 0; i < 8; i++) 
         OTP += digits[Math.floor(Math.random() * 10)];
    return OTP;
}

const otpMap = new Map();
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    const CHECK_EXISTENCE_QUERY = `SELECT * FROM users WHERE username='${username}' OR email='${email}'`;

    db.query(CHECK_EXISTENCE_QUERY, (err, result) => {
        if (result.length > 0) {
            res.status(409).json({ message: 'Username or email already exists.' });
        } 
        else if (err) {
            res.status(500).json({ message: 'Error checking user existence.' });
            throw err;
        }
        else {
            const INSERT_TEMP_QUERY = `INSERT INTO temp (username, password, email) VALUES ('${username}', '${password}', '${email}')`;
            db.query(INSERT_TEMP_QUERY, (err, result) => {
                if (err) {
                    res.status(500).json({ message: 'Error saving user.' });
                    throw err;
                }      
                const OTP = generateOTP();
                otpMap.set(email, OTP);
                const mailData = {
                    from: 'its.bloody912@gmail.com', to: email,
                    subject: 'OTP Verification', text: `Your OTP for verification is: ${OTP}`
                };

                try {
                    contactEmail.sendMail(mailData, (error, info) => {
                        if (error) res.status(500).json({ message: 'Error sending OTP.' });
                        else res.status(200).json({ message: 'User saved & OTP sent successfully.'});   
                    });
                } catch (e) {
                    res.status(500).json({ message: 'Error sending OTP.' });
                }
            });
        }
    });
});

app.post('/verifyOTP', (req, res) => {
    const { username, password, email, otp } = req.body;
    const storedOTP = otpMap.get(email);

    if (storedOTP === otp) {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' })
        otpMap.delete(email); 
         const INSERT_QUERY= `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`;
         const DELETE_QUERY = `DELETE FROM TEMP`;
        db.query(INSERT_QUERY, (err, result) => {
            if (err) throw err;
            console.log("INSERTED");
        });
        db.query(DELETE_QUERY, (err, result) => {
            if (err) throw err;
            console.log("DELETED");
        });
        res.status(200).json({ message: 'OTP verified successfully.', token });
    } else 
        res.status(200).json({ message: 'Invalid OTP.' });
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
            const token = jwt.sign({ email }, SECRET_KEY);
            res.status(200).send({ message: 'Login successful.', token });
        } else {
            res.status(401).send({ message: 'Invalid credentials.' });
        } 
    });
});

const generateDepartments = () => {
    const departments = [];
    for (let i = 0; i < 50; i++) {
        departments.push({id:i,name:faker.commerce.department()}); 
    }
    return departments;
}; 


app.get('/fetchDepartments',(req, res) => {
    const departments = generateDepartments();
    console.log(departments);
    res.json(departments);
});

app.get('/protectedPage',(req, res) => { 
    res.json({ message: 'This is a protected page' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

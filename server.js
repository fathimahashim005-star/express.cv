
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '1234') {
        res.send('Login Successful!');
    } else {
        res.send('Invalid Username or Password!');
    }
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

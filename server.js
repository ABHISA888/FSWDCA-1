const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res)=>{
    return res.send('Welcome to User Registration API');
});

app.post('/sign-up', (req,res)=>{
    const {Username,Email,Password,DateofBirth} = req.body;
    if(!Username)
    {
        return res.status(400).send('Username cannot be empty');
    }
    if(!Email)
    {
        return res.status(400).send('Email cannot be empty');
    }
    if(!Password.length<8 && !Password.length>16)
    {
        return res.status(400).send('Password length should be greater than 8 and must be less than 16');
    }
    
    if(!DateofBirth)
    {
        return res.status(400).send('Date of Birth cannot be empty');
    }
    return res.status(200).send({message: 'User registered successfully'});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

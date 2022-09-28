const express = require('express');


const app = express();


app.get('/', (req,res) => {
    res.sendFile(path.join(-dirname+'/index.html'));
})
app.get('/welcome', (req,res) => {
    res.sendFile(path.join(-dirname+'/welcome.html'));
})
app.get('/about', (req,res) => {
    res.sendFile(path.join(-dirname+'/about.html'));
})
app.get('/list', (req,res) => {
    res.sendFile(path.join(-dirname+'/list.html'));
})
app.get('/contact', (req,res) => {
    res.sendFile(path.join(-dirname+'/contact.html'));
})



app.listen(3000, () => {
    console.log('listening at http://localhost:3000');
});
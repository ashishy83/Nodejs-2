const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

app.get('/',(req,res)=>{
    res.send("I am home page");
    res.end();
});

app.get('/gallery',(req,res)=>{
    res.send('Im in the gallery...')
    res.end();
});

app.get('/contact',(req,res)=>{
    res.send('Contact Us');
    res.end()
});

app.get('/abc',(req,res)=>{
    res.send('Abceddfdfsfdf.....');
    res.end();
});

app.post('/form',(req,res)=>{
    const content = 'hello';
    fs.appendFile(path.join(__dirname,'/message.txt'),content,(err)={
        if(err){
            console.log(err);
        }
     })
     res.send('Data is submited')
});

app.listen(8080,()=>{
    console.log('Application is running');
});
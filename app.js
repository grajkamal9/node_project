//import express app
const express = require('express');
//create express application
const app = express();
//set the root route
//and the message hello world
app.get('/', (req, res) => {
    res.send("Hello World");
});

const jobs = [
    {
        id:1,
        title:"Software Engineer"
    },
    {
        id:2,
        title:"Senior Software Engineer"
    }
];

app.get('/jobs', (req, res) => {
    res.json(jobs);
});

//listen express app at port 3000
app.listen(3000, ()=>{
    console.log("Application running on the port 3000");
});
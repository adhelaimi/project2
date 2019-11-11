const express = require('express')
let ourApp = express()
ourApp.listen(3001)

//this is important - it declares body to json
//middleware - validation of data
ourApp.use(express.urlencoded({extended: false}))
//get request
ourApp.get('/', function(req, res){
    res.send(`
    <form action="/answer" method="POST">
    <p>What is your favorite food?</p>
    <input name="foodChoice" autocomplete="off">
    <button> Submit your choice </button>
    </form>
    `)
})

//post request - send request
ourApp.post('/answer', function(req, res) {
    // res.send("thanks for submitting your answer!")
    if(req.body.foodChoice.toLowerCase() == "oranges"){
        res.send(`<p>Congrats! thats the correct answer</p>
        <a href="/">HomePage</a>
        `)} else {
            res.send(`<p>Sorry! thats not valid</p>
        <a href="/">HomePage</a>
        `) 
        
    }
})

// to visit data
ourApp.get('/answer', function(req, res){
    res.send("you need to submit an answer before getting to URL")
})
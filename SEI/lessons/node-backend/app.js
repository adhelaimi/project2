//how server works
const http = require('http')

let ourApp = http.createServer( function(req, res){
    // how it should behaive
    if(req.url == "/"){
        res.end('Hello thanks for visiting my home page')
    }
    if(req.url == "/about"){
        res.end('thanks for showing interest!')
    }
    res.end('Are you Lost?')
})

ourApp.listen(3000)
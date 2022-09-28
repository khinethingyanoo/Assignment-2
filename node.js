var http = require('http'); 
var fs= require('fs');

var server = http.createServer(function (req, res) { 
    fs.readFile('./index.html',(err,data)=>{
        res.write(data);
        return res.end()
    } )

    var server = http.createServer(function (req, res) { 
        fs.readFile('./welcome.html',(err,data)=>{
            res.write(data);
            return res.end()
        } )
        var server = http.createServer(function (req, res) { 
            fs.readFile('./about.html',(err,data)=>{
                res.write(data);
                return res.end()
            } )
        var server = http.createServer(function (req, res) { 
            fs.readFile('./list.html',(err,data)=>{
                res.write(data);
                return res.end()
            } )
            var server = http.createServer(function (req, res) { 
                fs.readFile('./contact.html',(err,data)=>{
                    res.write(data);
                    return res.end()
                } )
       
        fs.readFile('./style.css',(err,data)=>{
            res.write(data);
            return res.end()
        } )
    
    
    })


   
})


    




server.listen(5500); 

console.log('Node.js web server at port 5500 is running..')
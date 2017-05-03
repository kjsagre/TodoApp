
var notes = require("./controller/note"); 
var express = require("express");


var app = express();


 app.get("/",(req,res)=>{
	 res.send("Hello World");
	 //res.sendFile(path.join(__dirname,"../views/index.html"))
 });
 
 app.use("/Notes",notes);
 
 app.listen(3000,() => console.log("Running on localhost:3000"));
var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});

app.get("/google/", function(req, res){
    res.redirect("https://www.google.com/");   
});
app.get("/google/:search", function(req, res){
    var search = req.params.search;
    res.redirect("https://www.google.com/search?q="+search);
   
});

app.get("/*", function(req, res){
   var name = req.params.name;
   res.send("<h1> ERROR 404 </h1>");
});
app.listen(8080, function(){
   console.log("Example is running on port 8080");
});
/*var os = require("os");
var message = "platform is ";

function main(){
    console.log(message + os.platform());

}
main();*/
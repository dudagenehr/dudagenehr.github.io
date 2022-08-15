const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.get("/", function(req, res){
  res.render("index");
})
app.get("/projects", function(req, res){
  res.render("projects");
})

app.listen(8080);

console.log('rodando')
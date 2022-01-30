const express = require('express');
const bodyParser= require('body-parser');
// const control = require('./Controllers/StuController')



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
   res.json({message:"welcome"});
 });
 require('./Routes/StudentRoute.js');
app.listen(8000,function(){
    console.log("Server started");
});
var express = require('express');
var app = express();

const port = process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send(`App is running on port ${port}`);
})

app.listen(port,()=>{
    console.log("server is runnig on "+port);
})
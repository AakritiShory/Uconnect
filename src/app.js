const express=require('express');

//new app of express
const app=express();

//handling the code ,request handler
app.use("/test",(req,res)=>{
    res.send("hello from the server");
});
//for handling multiple req we use routes like /test

app.listen(3000,()=>{
    console.log("server listening on port 3000..");
});
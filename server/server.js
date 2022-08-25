const express= require('express');

const connect= require('./configs/db');
const router= require('./routes/userRoute');

const app= express();


app.use(express.json());


app.use('/',router)


app.listen(5000,async()=>{
    try {
        await connect();
        console.log("listenning at port 5000...")
    } 
    catch (error)
     {
        console.log(error);
    }
})



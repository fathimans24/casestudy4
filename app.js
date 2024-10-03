const express=require('express');
const app=express();
const userRouter=require('./router/hosroutes');
app.use('/hospital',userRouter); //creating url
require('dotenv').config();     

const PORT=process.env.PORT  
require('./db/hosconnection');  






app.listen(PORT,()=>{
    console.log(`server is running on a port${PORT}`);
})
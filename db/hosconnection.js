const mongoose=require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.mongoDB_URL).then(()=>{       //then represent postive and catch represnt negative
    console.log('connection established');
}).catch(()=>{
    console.log('error in connection');
})

const mongoose=require('mongoose');
const hospSchema=mongoose.Schema({
    EmployeeName:String,
     EmployeeDesignation:String,
     EmployeeLocation:String,
     Salary:Number
}) 
const hosData=mongoose.model('hospital',hospSchema)
module.exports=hosData; 
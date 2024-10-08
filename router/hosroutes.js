const express=require('express')
const router=express.Router()
router.use(express.json());
 const hosModel=require('../model/hosdata');
 router.use(express.json());        //madanitory for post opertion
 router.use(express.urlencoded({extended:true}))
//crud opertion
//get operation
router.get('/',async(req,res)=>{
    try{
        const data=await hosModel.find();     //schema file anu moviemodel
    res.status(200).send(data);
    }catch (error){
        res.status(404).send('Data not found');

    }
})
//post
router.post('/addhosdata',async(req,res)=>{
    try{
        var item=req.body;
        const data1=new hosModel(item);   //instance create
        const saveddata=await data1.save();
        res.status(200).send('post succesfull');
    }catch (error) {
        res.status(404).send('post unsuccesfull');

    }
})
    //update
    router.put('/edit/:id',async (req,res)=>{ 
        try {
            const id=req.params.id
            const data=await hosModel.findByIdAndUpdate(id,req.body);
            res.status(200).send('update sucessfull')
        } catch (error) {
            res.status(404).send('upadate unsuccesfull')
            
        }
    })
//delete
router.delete('/delete/:id',async (req,res)=>{ 
    try {
        const id=req.params.id
        const data=await movieModel.findByIdAndDelete(id);
        res.status(200).send('delete sucessfull')
    } catch (error) {
        res.status(404).send('delete unsuccesfull')
        
    }
})


module.exports = router;
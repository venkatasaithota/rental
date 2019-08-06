const exp=require('express')
const adminRoutes=exp.Router()
//importing database object
const initdb=require('../DBConfig').initdb
const getdb=require('../DBConfig').getdb
//admin login handler
adminRoutes.post('/login',(req,res)=>{
    var dbo=getdb();
    dbo.collection("admin").find({name:{$eq:req.body.name}}).toArray((err,dataArray)=>{
        
        if (dataArray.length==0)
        {
            res.json({message:"admin invalid name "})
        }
        else{
            if(dataArray[0].name==req.body.name)
            {
            res.json({message:"logged In Successfully"})
            }
            else{
                res.json({message:"invalid password"})
            }
        }
    })

})
//get handlers from admin 
adminRoutes.get('/viewprofiles',(req,res)=>{
    var dbo=getdb();
    dbo.collection('owner').find().toArray((err,dataArray)=>{
        if(err){
            console.log('error in reading data')
        }
        else{
            dbo.collection('vendor').find().toArray((err,dataArray1)=>{
                if(err){
                    console.log('error in reading data')
                }
                else{
                    res.json({data:dataArray,data1:dataArray1})
                }
            })
        }
    })
})





module.exports=adminRoutes
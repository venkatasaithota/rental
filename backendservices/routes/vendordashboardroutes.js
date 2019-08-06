const exp=require('express');
//importing database object
const initdb=require('../DBConfig').initdb
const getdb=require('../DBConfig').getdb
initdb();
//importing bcrypt
const bcrypt=require('bcrypt')
const vendordashboardroutes=exp.Router();
//importing checkAuthorization middleware
const checkAuthrization=require('../middleware/checkAuthorization');
//put request handler for edit profile
vendordashboardroutes.put('/editprofile',checkAuthrization,(req,res,next)=>{
    //hashing the password using 
    bcrypt.hash(req.body.password,5,(err,hashedPassword)=>{
        if(err)
        {
            next(err)
        }
        else{
            req.body.password=hashedPassword
            console.log(req.body)
            console.log(req.body)
            var dbo=getdb();
         dbo.collection("vendor").updateOne({name:{$eq:req.body.name}},{$set:{date:req.body.date,mail:req.body.mail,number:req.body.number,password:req.body.password,
            address:req.body.address}},(err,success)=>{
                    if(err){
                        console.log('error in saving data')
                        next(err)
                    }
                    else{
                                res.json({"message": "updated successfully"})
                            }
                })
        
        }
    })
    })
   
//get request from whomtolet from seeing all houses
vendordashboardroutes.get('/whomtolet',(req,res,next)=>{
    dbo=getdb();
    dbo.collection('houses collection').find({status:{$eq:true}}).toArray((err,dataArray)=>{
        if(err){
            console.log('error in saving data')
            next(err)
        }
        else{
                    res.json({"message":dataArray})
                }
    })
})

//vendor instersted house post request 
vendordashboardroutes.post('/whomtolet',(req,res,next)=>{
    console.log(req.body)
    var dbo=getdb();
    if (req.body.length==0)
    {
        res.json({message:"no data get from client"})
    }
    else{
        dbo.collection("whomtolet").insertOne(req.body,(err,success)=>{
            if(err){
                console.log('error in saving data')
                next(err)
            }
            else{
                res.json({message:"request sent  successfully"})
            }
        })
    }
})
//vendor dopayment
vendordashboardroutes.post('/dopayment',(req,res,next)=>{
    console.log(req.body)
    var dbo=getdb();
    if (req.body.length==0)
    {
        res.json({message:"no data get from client"})
    }
    else{
        dbo.collection("vendorpayments").insertOne(req.body,(err,success)=>{
            if(err){
                console.log('error in saving data')
                next(err)
            }
            else{
                res.json({message:"registered successfully"})
            }
        })
    }
})
//vendor payment history
//ownerdashboard viewprofile grt handler
vendordashboardroutes.get('/vendorpaymenthistory/:name',(req,res,next)=>{
    var dbo=getdb();
    dbo.collection('vendorpayments').find({vendorname:{$eq:req.params.name}}).toArray((err,dataArray)=>{
        if(err){
            next(err)
        }
        else
        {
            res.json({data:dataArray})
        }
    })
})

//error handling callback function
vendordashboardroutes.use((err,req,res,next)=>{
    console.log(err)
})
module.exports=vendordashboardroutes
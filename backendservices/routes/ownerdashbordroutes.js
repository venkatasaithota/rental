const exp=require('express');
var ownerdashboardRoutes=exp.Router();
//importing database object
const initdb=require('../DBConfig').initdb;
const getdb=require('../DBConfig').getdb;
initdb();
//importing bcrypt
const bcrypt=require('bcrypt')
//importing checkAuthorization middleware
const checkAuthrization=require('../middleware/checkAuthorization');

//ownerdashboardRoutes handler
ownerdashboardRoutes.post('/addhouse',checkAuthrization,(req,res,next)=>{
    console.log(req.body)
    var dbo=getdb();
    if (req.body.length==0)
    {
        res.json({message:"no data get from client"})
    }
    else{
        req.body.status=true
        dbo.collection("houses collection").find({address:{$eq:req.body.address}}).toArray((err,dataArray)=>{
            if (dataArray.length==0)
            {
                dbo.collection("houses collection").insertOne(req.body,(err,success)=>{
                    if(err){
                        console.log('error in saving data')
                        next(err);
                    }
                    else{
                        res.json({message:"registered successfully"})
                        //console.log(success)
                    }
                })
            }
            else{
                res.json({message:"same address exists please change it "})
            }
        })
        
    }
})
//ownerdashboard adding payments 
ownerdashboardRoutes.post('/addpayments',checkAuthrization,(req,res,next)=>{
    console.log(req.body)
    var dbo=getdb();
    if (req.body.length==0)
    {
        res.json({message:"no data get from client"})
    }
    else{
        req.body.status=true
        dbo.collection("payments collection").insertOne(req.body,(err,success)=>{
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
//ownerdashboard get method
ownerdashboardRoutes.get('/viewhouse/:name',checkAuthrization,(req,res,next)=>{
    //console.log(req.params)
    var dbo=getdb();
        dbo.collection("houses collection").find({$and:[{ownername:{$eq:req.params.name}},{status:{$eq:true}}]}).toArray((err,data)=>{
            if(err){
                console.log('error in saving data')
                next(err)
            }
            else{
                //console.log(data)
                res.json({message:data})
            }
        })
})
//getting clients who are interseted
//ownerdashboard get method
ownerdashboardRoutes.get('/viewclient/:name',checkAuthrization,(req,res,next)=>{
    //console.log(req.params)
    var dbo=getdb();
        dbo.collection("whomtolet").find({ownername:{$eq:req.params.name}}).toArray((err,data)=>{
            if(err){
                console.log('error in saving data')
                next(err)
            }
            else{
                //console.log(data)
                res.json({message:data})
            }
        })
})
// put method handler for update the owner 
ownerdashboardRoutes.put('/editprofile',(req,res,next)=>{
    console.log(req.body)
    bcrypt.hash(req.body.password,5,(err,hashedPassword)=>{
        if(err)
        {
            next(err)
        }
        else{
            req.body.password=hashedPassword
            var dbo=getdb();
        dbo.collection("owner").updateOne({name:{$eq:req.body.name}},{$set:{date:req.body.date,mail:req.body.mail,number:req.body.number,password:req.body.password,address:req.body.address}},(err,success)=>{
            if(err){
                console.log('error in saving data')
                console.log(err)
            }
            else{
                        res.json({"message": "updated successfully"})
                }
    
            })
        }           
})
})
//update the request from client
// put method handler for update the owner 
ownerdashboardRoutes.put('/viewclient',(req,res,next)=>{
    console.log(req.body)
    var dbo=getdb();
        dbo.collection("houses collection").updateOne({address:{$eq:req.body.address}},{$set:{reqstatus:req.body.reqstatus,vendorname:req.body.vendorname}},(err,success)=>{
            if(err){
                console.log('error in saving data')
                next(err)
            }
            else{
                dbo.collection("whomtolet").deleteOne({$and:[{vendorname:req.body.vendorname},{address:req.body.address}]},(err,success)=>{
                    if(err){
                        console.log('error in saving data')
                        next(err)
                    }
                    else{
                        dbo.collection('whomtolet').find({ownername:{$eq:req.body.ownername}}).toArray((err,dataArray)=>{
                            if(err){
                                next(err)
                            }
                            else
                            {
                                res.json({data:dataArray})
                            }
                        })
                            }
                })
                    }
        })
})
//deleting client request
ownerdashboardRoutes.delete('/viewclient',(req,res,next)=>{
    console.log(req.body)
    var dbo=getdb();
        dbo.collection("whomtolet").deleteOne({$and:[{vendorname:req.body.vendorname},{address:req.body.address}]},(err,success)=>{
            if(err){
                console.log('error in saving data')
                next(err)
            }
            else{
                dbo.collection('whomtolet').find({name:{$eq:req.body.ownername}}).toArray((err,dataArray)=>{
                    if(err){
                        next(err)
                    }
                    else
                    {
                        res.json({data:dataArray})
                    }
                })
                    }
        })
    
})
//deleting the house
ownerdashboardRoutes.put('/viewhouse',checkAuthrization,(req,res,next)=>{
    console.log(req.body)
    var dbo=getdb();
    dbo.collection('houses collection').updateOne({address:{$eq:req.body.address}},{$set:{status:false}},(err,result)=>{
        if (err)
        {
            next(err)
        }
        else{
            dbo.collection('houses collection').find({$and:[{status:{$eq:true}},{ownername:{$eq:req.body.ownername}}]}).toArray((err,dataArray)=>{
                if (err)
                {
                    next(err)
                }
                else
                {
                    res.json({message:"successfully deleted",data:dataArray})
                }
            })
        }
    })

})
//ownerdashboard viewprofile get handler
ownerdashboardRoutes.get('/viewprofile/:name',(req,res,next)=>{
    var dbo=getdb();
    dbo.collection('owner').find({name:{$eq:req.params.name}}).toArray((err,dataArray)=>{
        if(err){
            next(err)
        }
        else
        {
            res.json({data:dataArray})
        }
    })
})
//owner payments history
ownerdashboardRoutes.get('/paymenthistory/:name',(req,res,next)=>{
    var dbo=getdb();
    dbo.collection('vendorpayments').find({ownername:{$eq:req.params.name}}).toArray((err,dataArray)=>{
        if(err){
            next(err)
        }
        else
        {
            res.json({data:dataArray})
        }
    })
})
//ownerdashboard get method for view payments
ownerdashboardRoutes.get('/viewpayments/:name',(req,res,next)=>{
    //console.log(req.params)
    var dbo=getdb();
        dbo.collection("payments collection").find({ownername:{$eq:req.params.name}}).toArray((err,data)=>{
            if(err){
                console.log('error in saving data')
                next(err)
            }
            else{
                //console.log(data)
                res.json({message:data})
            }
        })
})



//error handling callback function
ownerdashboardRoutes.use((err,req,res,next)=>{
    console.log(err)
})
module.exports=ownerdashboardRoutes
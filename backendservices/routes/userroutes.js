const exp=require('express');
//importing database object
const initdb=require('../DBConfig').initdb
const getdb=require('../DBConfig').getdb
const secret='secret'
//importing jwt
const jwt=require('jsonwebtoken')
//intailizing dbo
initdb();
//importing bcrypt
const bcrypt=require('bcrypt')
var userRoutes=exp.Router();

//userRoutes handler
userRoutes.post('/register',(req,res,next)=>{
    console.log(req.body)
    //hashing the password using 
    bcrypt.hash(req.body.password,5,(err,hashedPassword)=>{
        if(err)
        {
            next(err)
        }
        else{
            req.body.password=hashedPassword
            console.log(req.body)
            var dbo=getdb();
            if(req.body.usertype==='owner')
            {
                dbo.collection("owner").find({name:{$eq:req.body.name}}).toArray((err,dataArray)=>{
                    if (dataArray.length==0)
                    {
                        dbo.collection("owner").insertOne(req.body,(err,success)=>{
                            if(err){
                               next(err)
                            }
                            else{
                                res.json({message:"registered successfully"})
                            }
                        })
                    }
                    else{
                        res.json({message:"name exists"})
                    }
                })
    
               
            }
            else{
                dbo.collection("vendor").find({name:{$eq:req.body.name}}).toArray((err,dataArray)=>{
                    if (dataArray.length==0)
                    {
                        dbo.collection("vendor").insertOne(req.body,(err,success)=>{
                            if(err){
                               next(err)
                            }
                            else{
                                res.json({message:"registered successfully"})
                            }
                        })
                    }
                    else{
                        res.json({message:"name exists"})
                    }
                })
            }
        }
    })
   
        
})
//login validation user
userRoutes.post('/login',(req,res,next)=>{
    console.log(req.body)
    var dbo=getdb();
        if(req.body.usertype==='owner')
        {

            dbo.collection("owner").find({name:{$eq:req.body.name}}).toArray((err,data)=>{
                if(err){
                   next(err)
                }
                else{
                    if (data.length==0)
                    {
                        res.json({message:'owner name invalid'})
                    }
                
                   else {
                    bcrypt.compare(req.body.password,data[0].password,(err,result)=>{
                            if (result==true)
                            {
                                //intailizing varaible
                                currentUserName=data[0].name
                                //create and send JSON token
                                const signedToken=jwt.sign({name:data[0].name},secret,{expiresIn: "7d"})
                                res.json({message:'owner logged in successfully',userdata:data,token:signedToken})
                            }
                            else{
                                res.json({message:'owner password invalid'})
                            }
                    })
                      
                   }
                }
            })
        }
        else{
            dbo.collection("vendor").find({name:{$eq:req.body.name}}).toArray((err,data)=>{
                if(err){
                   next(err)
                }
                else{
                    if (data.length==0)
                    {
                        res.json({message:'vendor name invalid'})
                    }
                    
                   else {
                    bcrypt.compare(req.body.password,data[0].password,(err,result)=>{
                        if (result==true)
                        {
                            //intailizing varaible
                            currentUserName=data[0].name
                            //create and send JSON token
                            const signedToken=jwt.sign({name:data[0].name},secret,{expiresIn: "7d"})
                            res.json({message:'vendor logged in successfully',userdata:data,token:signedToken})
                        }
                        else{
                            res.json({message:'vendor password invalid'})
                        }
                    })
                      
                   }
                }
            })
        }
        
})
//error handling callback function
userRoutes.use((err,req,res,next)=>{
    console.log(err)
})
module.exports=userRoutes
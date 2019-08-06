const jwt=require('jsonwebtoken')
const secret='secret';
var checkAuthorization=(req,res,next)=>{
    var token=req.headers['authorization'];
    //console.log(req.headers['authorization'])
    //if token is found ,check for validity
    if(token == undefined)
    {
        return res.json({"message": "unauthorizated access"})
    }
    if(token.startsWith('Bearer '))
    {
        token=token.slice(7,token.length)
        jwt.verify(token,secret,(err,decoded)=>{
            if(err){
                return res.json({"message":"invalid access"})
            }
            //forward to next middleware or req handler
            else{
                next();
            }
            
        })
    }
}
module.exports=checkAuthorization
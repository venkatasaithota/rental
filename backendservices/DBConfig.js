const mc=require('mongodb').MongoClient
const url="mongodb://saithota:saithota@cluster0-shard-00-00-uanmy.mongodb.net:27017,cluster0-shard-00-01-uanmy.mongodb.net:27017,cluster0-shard-00-02-uanmy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
var dbo;
function initdb(){
    mc.connect(url,{useNewUrlParser:true},(err,client)=>{
        if(err)
        {
            console.log('error in connecting database')
            console.log(err)
        }
        else
        {
            dbo=client.db('sampledatabase')
            console.log('database connected successfully')
        }
    })
}
function getdb(){
    console.log("dbo intailized")
    return dbo;
}
module.exports={initdb,getdb}
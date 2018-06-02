var redis = require("redis");
var settings = require('./settings')
client = redis.createClient(6379,'192.168.1.8',{});  

client.on("error", function (err) {  
    console.log("Error " + err);  
});  

module.exports = {

    getHolderName: function(key,cb) {
    key = settings.symbol + ":" + key;

    client.get(key ,function(err,response){
            if (err) {
                console.log("err:" + err); 
                cb(key);
            }
            console.log("response:" + response); 
            console.log("key:" + key); 
            if (response == null) {
                cb(key);
            } else {
                cb(response);
            }
       
        });
            
    }
}



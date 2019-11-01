var express = require('express');
var bodyParser = require('body-parser');

var mongoClient = require('mongodb').MongoClient;
var db;

mongoClient.connect('mongodb://127.0.0.1:27017/cities', function(err, client){
    if(err) throw err;
    db = client.db('cities');
   
});

var app = express();


app.use(bodyParser.urlencoded());
app.use(express.static('public'))



app.get('/getcities', function(req,res){
    db.collection('cities').find().toArray(function(err,result){
    res.json(result);
    })
    
});

app.post('/', function(req, res){
    
    db.collection('cities').insert(req.body,function(err, result){
        res.redirect('/');
     })
   
    })

     
app.listen(3000);
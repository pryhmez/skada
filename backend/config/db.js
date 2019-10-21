var mongoose = require('mongoose');

function initDb (){
    mongoose.connect('mongodb://127.0.0.1:27017/learnable', {useNewUrlParser: true, useCreateIndex: true}, function (error){
        if(error) {
            console.log('not connected to DB')
        }else {
            console.log('connected to db ohhh')
        }
    })
}


module.exports = initDb
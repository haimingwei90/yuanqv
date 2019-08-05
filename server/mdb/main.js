const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yuanqv');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error!')),
db.once('open',function (){
    console.log('connetion success!')    
})
var userSchema = mongoose.Schema({
    name:String,
    password:String,
})
var User = mongoose.model('User',userSchema);

module.exports = User;

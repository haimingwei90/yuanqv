var express = require('express');
var router = express.Router();
var User = require('../mdb/main.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login',function(req,res,next){
    res.send('success')
})
router.post('/login/register',function(req,res,next){
    res.send('register!')
})
module.exports = router;

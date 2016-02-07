var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.sendFile(path.join(__dirname, "../public/", "/assets/views/index.html"));
});


router.get('/*', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.redirect('/')
});

module.exports = router;

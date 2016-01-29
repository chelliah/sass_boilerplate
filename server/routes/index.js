var express = require('express');
var router = express.Router();
var path = require('path');
var mobile = require('mobile-detect');

//router.get('/fuschia', function(req, res){
//    //var file = req.params[0] || "/assets/views/welcome.html";
//    res.sendFile(path.join(__dirname, "../public/", "/assets/views/fuschia.html"));
//});
//router.get('/open_arms', function(req, res){
//    //var file = req.params[0] || "/assets/views/welcome.html";
//    res.sendFile(path.join(__dirname, "../public/", "/assets/views/open_arms.html"));
//});

router.get('/about_me', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.sendFile(path.join(__dirname, "../public/", "/assets/views/aboutme.html"));
});

router.get('/contact', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.sendFile(path.join(__dirname, "../public/", "/assets/views/contact.html"));
});

router.get('/main', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";

    res.sendFile(path.join(__dirname, "../public/", "/assets/views/index.html"));
});

router.get('/', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    var md = new mobile(req.headers['user-agent']);
    if(md.mobile()){
        res.redirect('/main')
    }else{
        res.sendFile(path.join(__dirname, "../public/", "/assets/views/welcome.html"));
    }
});


router.get('/*', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.redirect('/main')
});

module.exports = router;
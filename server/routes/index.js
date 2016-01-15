var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/fuschia', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.sendFile(path.join(__dirname, "../public/", "/assets/views/fuschia.html"));
});
router.get('/open_arms', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.sendFile(path.join(__dirname, "../public/", "/assets/views/open_arms.html"));
});

router.get('/main', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.sendFile(path.join(__dirname, "../public/", "/assets/views/index.html"));
});

router.get('/*', function(req, res){
    //var file = req.params[0] || "/assets/views/welcome.html";
    res.sendFile(path.join(__dirname, "../public/", "/assets/views/welcome.html"));
});

module.exports = router;
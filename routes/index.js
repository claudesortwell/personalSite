const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    Project.find({}).then(projects => {
        res.render('welcome', {
            projects: projects
        });
    });
});

router.get('/add', function(req, res) {
    res.render('add');
});

router.get('/add/:password', function(req,res) {
    if(req.params.password == '123'){
        console.log('Yes');
    } else {
        console.log('No');
    }
    return;
});

module.exports = router;
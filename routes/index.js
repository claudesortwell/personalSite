const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    Project.find({}).then(projects => {
        res.render('welcome', {
            projects: projects
        });
    });
});

router.get('/add', function (req, res) {
    res.render('add');
});

module.exports = router;
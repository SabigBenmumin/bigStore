var express = require('express');
var router = express.Router();
var HomeModel = require('../models/homeModel')

router.get('/', function(req, res, next) {
    HomeModel.getData(function(err, data) {
        if (err) {
            // Handle error
        } else {
            res.render('HomeView', { data: data });
        }
    });
});

module.exports = router;

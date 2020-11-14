var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file



// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            requestedUserId : req.body.requestedUserId,
            countryId : req.body.countryId,
            cityId : req.body.cityId
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {

    var ziyarats = [
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-05-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2019-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-06-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },
        {
            atabeId: 1,
            ziaratType: 1,
            zeyaratState: 2,
            RequesterText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            anotherFirstName: "حسن",
            AnotherLastName: "احمدی",
            AcceptDate:"2020-04-29T12:14:57.0066667",
            DateOfCompletion:"2020-04-29T12:14:57.0066667",
            RequesterUserId:1
        },

    ];
    res.status(200).send(ziyarats);

    /*User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });*/
});



// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', /* VerifyToken, */ function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;
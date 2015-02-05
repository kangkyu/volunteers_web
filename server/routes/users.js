var express = require('express');
var router = express.Router();

var users = [
    {
        "_id": "1",
        "firstName": "Randy",
        "lastName": "Johnson",
        "email": "randy@example.com"
    },
    {
        "_id": "2",
        "firstName": "Ty",
        "lastName": "Cobb",
        "email": "ty@example.com"
    },
    {
        "_id": "3",
        "firstName": "Christy",
        "lastName": "Mathewson",
        "email": "christopher@example.com"
    },
    {
        "_id": "4",
        "firstName": "Nap",
        "lastName": "Lajoie",
        "email": "napoleon@example.com"
    }
];


/* /api/users. */
router.route('/')
    .get(function (req, res, next) {
        res.json(users);
    })
    .post(function (req, res, next) {
        res.send('Not Implemented');
    });

/* /api/users/id. */
router.param(':id', function (req, res, next, id) {
    req.data = users.filter(function (user) {
        return user._id === id;
    })[0] || {};
    next();
});

router.route('/:id')
    .all(function (req, res, next) {
        next();
    })
    .get(function (req, res, next) {
        res.json(req.data);
    })
    .put(function (req, res, next) {
        res.send('Not Implemented');
    })
    .delete(function (req, res, next) {
        res.send('Not Implemented');
    });


module.exports = router;

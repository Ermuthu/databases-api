var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var tokenSecret = require('../token-secret');

router.post('/authenticate', passport.authenticate('ldapauth', {session: false}), function(req, res) {
    //User is authorized! Let's create a payload for token generation
    const payload = {
        username: req.user.mailNickname,
        authorized: true
    }
    console.log(tokenSecret);
    //And create the token!
    var token = jwt.sign(payload, tokenSecret, {
        expiresIn: "24h" // expires in 24 hours
    });

    // return the information including token as JSON
    res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
    });
});

module.exports = router;

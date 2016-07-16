var express = require('express');
var router = express.Router();
var http_request = require('request');

var wrap = require('co-express');
var async = require('async');
var qs = require('querystring')
var mongoose = require('mongoose');
var User = mongoose.model('User');

//Allowing Cross origin access
router.all('/*', wrap(function*(request, response, next) {
    response.header('Access-Control-Allow-Origin', request.headers.origin);
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
    response.header('Access-Control-Allow-Credentials', 'true');
    next();
}));

router.post('/auth/linkedin', wrap(function*(request, response, next) {
    http_request.post('https://www.linkedin.com/uas/oauth2/accessToken', {
        form: {
            grant_type: 'authorization_code',
            code: request.body.code,
            redirect_uri: request.body.redirectUri,
            client_id: '77f0ll5i8squ2t',
            client_secret: 'ORqAyo1SFTXf1ZAU'
        }
    }, function(error, response1, body) {
        body = JSON.parse(body);
        http_request.get('https://api.linkedin.com/v1/people/~:(id,formatted-name,email-address,picture-urls::(original))?format=json', {
            headers: {
                'Authorization': 'Bearer ' + body.access_token
            }
        }, function(error, response2, body) {
            response.send({
                'token': JSON.stringify(body)
            });
        });
    });
}));

router.post('/steps', wrap(function*(request, response, next) {
    response.send([
        {
            title: 'Are you male or female?',
            images: [
                '/images/gender/female.png',
                '/images/gender/male.png',
            ]
        },
        {
            title: 'What will you bring with you?',
            padding: true,
            images: [
                '/images/item/bag.png',
                '/images/item/coat.png',
                '/images/item/jumper.png',
                '/images/item/money.png',
            ]
        },
        {
            title: 'Who are you?'
        },
        {
            title: 'Where will you go?',
            images: [
                '/images/place/cinema.png',
                '/images/place/football.png',
                '/images/place/shopping.png',
                '/images/place/swimming.png',
            ]
        },
        {
            title: 'How do you get there?',
            images: [
                '/images/transport/bus.jpg',
                '/images/transport/walking.jpg',
                '/images/transport/car.png',
                '/images/transport/bike.jpg',
            ]
        },
    ]);
}));

router.post('/profiles', wrap(function*(request, response, next) {
    var gender = request.body.gender;
    var step1 = request.body.step1;

    var users = yield User.find({ gender: gender, password: step1 }).exec();
    var pictures = [];
    for (var i = 0; i < users.length; i++) {
            pictures.push(users[i].picture);
    }
    response.send(pictures);
    console.log(pictures);
}));

router.post('/login', wrap(function*(request, response, next) {
    var picture = request.body.picture;
    var password = request.body.password;

    var user = yield User.findOne(request.body).exec();

    if (user) {
        response.send({
            status: 'LOGIN_OK',
            user: user
        });
    } else {
        response.send({
            status: 'LOGIN_FAIL'
        });
    }
}));

router.post('/apps', wrap(function*(request, response, next) {
    var picture = request.body.picture;
    var password = request.body.password;
    var apps = request.body.apps;

    var user = yield User.findOne({ picture: picture, password: password }).exec();

    if (user) {
        user.apps = apps;
        user.markModified('apps');
        yield user.save();
        response.send({
            user: user
        });
    } else
        response.send({});
}));

router.post('/register', wrap(function*(request, response, next) {
    var user = yield User.findOne({ picture: request.body.picture }).exec();
    if (user) {
        response.send({
            status: 'LOGIN_FAIL'
        });
        return;
    }
    var user = new User(request.body);
    yield user.save();
    response.send({
        status: 'LOGIN_OK',
        user: user});
}));

module.exports = router;

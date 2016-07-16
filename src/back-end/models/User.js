var mongoose = require('mongoose');

var AppSchema = new mongoose.Schema({
    name: String,
    image: String,
    url: String,
    username: String,
    password: String
});

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    picture: String,
    password: [ String ],
    apps: [ AppSchema ]
});

mongoose.model('User', UserSchema);

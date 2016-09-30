var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var config = require('../config/google.js');
var host = (config.env !== 'dev') ? "http://tracking-lobo.herokuapp.com" : "http://tracking-lobo.com:3000";

var User = require('../schemas/User');

passport.use(new GoogleStrategy({
	clientID: config.googleClientId,
	clientSecret: config.googleClientSecret,
	callbackURL: host + "/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
	return done(null, profile);
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

router.get('/', function(req, res, next) {
	if (req.user) {
		res.redirect('/app');	
	} else {
		res.render('Login/login', {});
	}
});

router.get('/app', function(req, res, next) {
	if (!req.user) {
		res.redirect('/');	
	} else {
		res.render('App/home', {});
	}
});

router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/fail' }), function(req, res) {
	var googleId = req.user.id;
	User.find({ 'googleId': googleId }, function(err, user) {
		var newUser;
		if (err) throw err;
		if (!user.length) {
			newUser = new User({
				'googleId': googleId,
				'created_at': new Date()
			});

			newUser.save(function(err) {
				if (err) throw err;
				res.redirect('/app');
				console.log('User saved successfully!');
			});
		} else {
			res.redirect('/app');
			
		}
	});
});

router.get('/logout', function(req, res){
	req.session.destroy(function (err) {
		res.redirect('/'); 
	});
});

module.exports = router;

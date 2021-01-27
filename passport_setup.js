let LocalStrategy = require('passport-local').Strategy;
let bcrypt = require('bcrypt');
let models = require('./models');

const validPassword = function(user, password) {
    return bcrypt.compareSync(password1, user.password);
}
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        models.Login.findOne({
            where: {
                'id': id
            }
        }).then(user => {
            if (user == null) {
                done(new Error('Wrong user id.'));
            }
            done(null, user);
        });
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password1',
        passReqToCallback: true
    },
    function (req, email, password1, done) {
        return models.Login.findOne({
            where: {
                'email': email
            },
        }).then(user => {
            if (user == null) {
                req.flash('message', 'incorrent credentials');
                return done(null, false);
            } else if (user.password == null || user.password == undefined) {
                req.flash('message', 'incorrent credentials password');
                return done(null, false);
            } else if (!validPassword(user, password1)) {
                req.flash('message', 'incorrent credentials password1');
                return done(null, false);
            }

            return done(null, user);
        }).catch(err => {
            done(err, false);
        })
    }
    ));
}
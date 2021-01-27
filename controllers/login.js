const models = require("../models"); // import the model so we can use it below and save it

// method called index that we are exporting
exports.register_page = function(req, res, next) {
    var result = models.Login.findAll().then((el) => {
        // req.session.destroy();
        res.render("register", {el: el});
    });
};

// login
exports.login_page = function(req, res, next) {
    var result = models.Login.findAll().then((el) => {
        res.render("login", {el: el});
    });
};

// user submitted their login details
exports.login_submit = function(req, res, next) {
    var result = models.Login.findAll({
        where: {
            email: req.body.email,
            password: req.body.password
        }   
        }).then((el) => {
            if (el !== undefined && el.length > 0) {
                // in db
                req.session.name = el[0].name;
                req.session.id = el[0].id;

                if (el[0].type == 1) {
                    req.session.admin = el[0].type;
                    console.log(req.session.admin);
                }
                return res.redirect("/medewerkers");
                
            } else {
                // not in db
                return res.redirect("/registerPage");
            }
    });
};

// user registered on the website
exports.register_submit= function(req, res, next) {

    if (req.body.password1 == req.body.password2) {
        return models.Login.create({ 
            name: req.body.name,
            email: req.body.email,
            zip: req.body.zip,
            phone: req.body.phone,
            password: req.body.password1
        }).then(login => {
            res.redirect('/registerPage'); 
        });
    
    } else {
        res.redirect('/registerPage'); 
    }
};

exports.logout = function(req, res, next) {
    // console.log(req.body.password1);
    req.session.destroy();
    res.redirect("loginPage");
};



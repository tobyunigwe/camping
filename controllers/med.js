const models = require("../models"); // import the model so we can use it below and save it

// main page of medewerkers when logged in
exports.get_landing = function(req, res, next) {

    if (req.session.name) {
        res.render("mede/medewerker");
    }

    res.redirect("loginpage");
};






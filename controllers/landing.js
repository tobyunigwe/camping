const models = require("../models"); // import the model so we can use it below and save it

// method called index that we are exporting
exports.get_landing = function(req, res, next) {
    res.render('landing')

};





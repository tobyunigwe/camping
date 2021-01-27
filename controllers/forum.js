const models = require("../models"); // import the model so we can use it below and save it



// method called index that we are exporting
exports.get_landing = function(req, res, next) {

    if (!req.session.name) {
        res.redirect("/loginPage");
    }

    var result = models.Forum.findAll().then((result) => {
        res.render("forum", {result: result, creator: req.session.id});
    });
};

exports.show_forums = function(req, res, next) {
    if (!req.session.name) {
        res.redirect("/loginPage");
    }
    

    var result = models.Forum.findAll().then((result) => {
        res.render("forum", {result: result, creator: req.session.id});
    });
};

// go to the created form page
exports.forum_create = function(req, res, next) {

    if (!req.session.name) {
        res.redirect("/loginPage");
    }
    

    res.render("forum_create", {creator: req.session.id});
};

//delete the form
exports.forum_delete = function(req, res, next) {

    if (!req.session.name) {
        res.redirect("/loginPage");
    }

    if (!req.session.name) {
        res.redirect("/loginPage");
    }
    
    var result = models.Forum.destroy({where: { id: req.params.id }}).then((result) => {
         res.render("forum", {result: result, creator: req.session.id});
        //res.redirect('/forum');
    });
};

// storing a forum
exports.forum_submit = function(req, res, next) {

    if (!req.session.name) {
        res.redirect("/loginPage");
    }

    if (!req.session.name) {
        res.redirect("/loginPage");
    }
    
    return models.Forum.create({
        date1: req.body.date1,
        date2: req.body.date2,
        pers: req.body.pers,
        options: req.body.options,
        creator: req.body.creator
    }).then(login => {
        res.redirect('/forum');
    });


    // res.render("forum_create");
};
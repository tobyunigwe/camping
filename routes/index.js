/* always use these */
var express = require('express');
var router = express.Router();


// import controllers
let landing = require("../controllers/landing");
let login = require("../controllers/login");
let med  = require("../controllers/med");
let forum  = require("../controllers/forum");

/* controller/route LANDING */
router.get('/landing', landing.get_landing);
// router.post('/', landing.submit_lead);


//medewerker routes
router.get('/medewerkers', med.get_landing);


router.get('/registerPage', login.register_page);
router.post('/registerSubmit', login.register_submit);

// forum routes for the reserve
router.get('/forum', forum.get_landing);
router.get('/forum_create', forum.forum_create);
router.post('/forum_submit', forum.forum_submit);
router.post('/delete_form/:id', forum.forum_delete);

// login
router.get('/loginPage', login.login_page);
router.get('/logout', login.logout);
router.post('/loginSubmit', login.login_submit);
/* Always use this */
module.exports = router;

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./auth');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

var secretOrKey = process.env.UNIQUE_KEY;
if(secretOrKey=='mysecretkeythatshouldnotnestoredhere')
{
    console.log(process.env);
}
else
    console.log(" environment key has different  key")
var router = express.Router();

testob={"username":"jjj","password": "passjj"};
router.route('/delete')
    .delete(authController.isAuthenticated, function (req, res) {
            console.log(req.body);
            res = res.status(200);
        var user=req.body.username;
        if(!user)
        {res.json('no user');
        }
        else{
            if(testob.username==user)
                res.json('success delete: '+user);
            else
                res.json('delete false: '+user);

            }

        }
    );


router.get('/get/:username',function(req,res){
    var user=req.params.username;

    if(!user) {
        res.send(' input is not valid ');
    }

    else res.send('get request :' + user);

});

router.put('/put',function(req,res){

    console.log(req.body);
     if (req.get('Content-Type')){
        console.log("Content-Type: "+req.get('Content-Type'));
        res=res.type(req.get('Content-Type'));
    }
    res.send(req.body);
});

var createError = require('http-errors')
router.post('/post', function(req, res) {
    if (req.body.username && req.body.password) {

        var newUser = {
            username: req.body.username,
            password: req.body.password
        };
        res.json('new user :'+' username: '+newUser.username+' password: '+newUser.password);
    }
    else     if (req.get('Content-Type')){
        console.log("Content-Type: "+req.get('Content-Type'));
        res=res.type(req.get('Content-Type'));
        res.send(req.body);
        }
});

router.patch('/patch',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});
router.copy('/copy',function(req,res,next){
    return next(createError(404, 'These method is rejected.'))
    next()

});
router.head('/head',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});
router.options('/options',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});
router.link('/link',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});
router.unlink('/unlink',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});
router.purge('/purge',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});
router.lock('/lock',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});
router.unlock('/unlock',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});
router.propfind('/profind',function(req,res,next){

    return next(createError(404, 'These method is rejected.'))
    next()

});







app.use('/', router);
app.listen(process.env.PORT || 5000);

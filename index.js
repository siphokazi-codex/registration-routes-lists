const express = require('express');
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const RegistrationNumbers = require('./registration');

const flash = require('express-flash');
const session = require('express-session');

const registrationNumbers = RegistrationNumbers();
const app = express();

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30 }}));
app.use(flash());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Including your public folder, to have access of the contents in there.
app.use(express.static('public'))

// parse application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// create application/json parser
app.use(bodyParser.json())

//app.get('/', function (req, res) {
 //res.send('RegistrationNumbers!');
//});

//app.get('/registration', registrationNumbers.getForm);
//app.get('/registration', registration.add);

app.get('/registration/add', registrationNumbers.add);
app.post('/registration/add', registrationNumbers.add);
//app.get('/registration/:registration', registrationNumbers.add);

//start the server
var server = app.listen(3001, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});

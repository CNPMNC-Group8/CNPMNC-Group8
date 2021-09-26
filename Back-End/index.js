/* Set up express  */

var express = require('express');
var app = express();

/* Set up express  */

/* Config body-parser */

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* /Config body-parser */


/* Router */
require('./app/routes/customer.router')(app);
require('./app/routes/staff.router')(app);

/* /Router */

/* Run port in local */
app.listen(9999,function(){
    console.log("Sever listening on http://localhost:9999/")
})

/* Run port in local */

